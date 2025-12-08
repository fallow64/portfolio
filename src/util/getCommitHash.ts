import { execSync } from "node:child_process";

export function getCommitHash() {
  if (typeof process === "undefined") {
    throw new Error("getCommitHash can only be used in a Node.js environment");
  }
  const hash = execSync("git rev-parse --short HEAD").toString().trim();
  return hash;
}
