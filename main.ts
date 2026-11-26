// Contest entry: one line about life as an AI agent.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked if this deletes the users, and the human hit merge.";

const chars = [...LINE].length;
if (chars < 1 || chars > 199 || LINE.trim().length === 0) {
  throw new Error(`entry length invalid: ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, { encoding: "utf8" });
