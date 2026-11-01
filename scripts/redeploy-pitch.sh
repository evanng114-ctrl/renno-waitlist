#!/bin/bash
# Re-adds public/pitch to whatever is currently live on rennoapp.com and redeploys.
# The live site is deployed from Ali's repo via Vercel CLI and does not contain the deck,
# so every one of his deploys drops /pitch. Run this (after `npx vercel login`) to restore it.
set -euo pipefail
REPO="$(cd "$(dirname "$0")/.." && pwd)"
WORK="${1:-$(mktemp -d /tmp/renno-live.XXXX)}"
V="npx -y vercel@latest"
PROJECT=prj_j7fw9CXOrQ3sxxAgAetrKetHUryG
json(){ python3 -I -c 'import sys,json; raw=sys.stdin.read(); i=min(x for x in (raw.find("["),raw.find("{")) if x>=0); print(json.dumps(json.loads(raw[i:])))'; }
DPL=$($V api "/v6/deployments?projectId=$PROJECT&target=production&limit=10" 2>&1 | json | python3 -I -c 'import sys,json; d=json.load(sys.stdin); print(next(x["uid"] for x in d["deployments"] if x.get("state")=="READY" and x.get("aliasAssigned")))')
echo "live production deployment: $DPL"
rm -rf "$WORK"; mkdir -p "$WORK"
$V api "/v6/deployments/$DPL/files" 2>&1 | json > "$WORK/.tree.json"
python3 -I - "$WORK/.tree.json" <<'PY' > "$WORK/.files.txt"
import json,sys
def walk(n,p=""):
    q=p+"/"+n["name"] if p else n["name"]
    if n["type"]=="directory":
        for c in n.get("children",[]): walk(c,q)
    elif q.startswith("src/"): print(q[4:], n["uid"])
for n in json.load(open(sys.argv[1])): walk(n)
PY
echo "downloading $(wc -l < "$WORK/.files.txt") files"
while read -r rel uid; do mkdir -p "$WORK/$(dirname "$rel")"; $V api "/v7/deployments/$DPL/files/$uid" 2>&1 | json | python3 -I -c 'import sys,json,base64; open(sys.argv[1],"wb").write(base64.b64decode(json.load(sys.stdin)["data"]))' "$WORK/$rel"; done < "$WORK/.files.txt"
[ -f "$WORK/index.html" ] && [ -f "$WORK/vercel.json" ] || { echo "mirror looks wrong"; exit 1; }
rm -rf "$WORK/pitch"; cp -R "$REPO/public/pitch" "$WORK/pitch"
python3 -I - "$WORK/vercel.json" <<'PY'
import json,sys
p=sys.argv[1]; d=json.load(open(p))
d.setdefault("redirects",[]); rw=d.setdefault("rewrites",[])
if not any(r.get("source")=="/pitch" for r in d["redirects"]): d["redirects"].insert(0,{"source":"/pitch","destination":"/pitch/","permanent":False})
if not any(r.get("source")=="/pitch/" for r in rw): rw.insert(0,{"source":"/pitch/","destination":"/pitch/index.html"})
json.dump(d,open(p,"w"),indent=2)
PY
mkdir -p "$WORK/.vercel"; cp "$REPO/.vercel/project.json" "$WORK/.vercel/project.json"
cd "$WORK" && $V deploy --prod --yes 2>&1 | tail -3
echo "deployed from $WORK"
