#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const repoUrl =
  "https://github.com/aniket-hue/monorepo-react-library-boilerplate.git";

const gitCheckoutCommand = `
	git clone ${repoUrl} ${repoName}
	cd ${repoName}
`;

const gitRemoveCommand = `cd ${repoName} && rm -rf .git`;
const installDepsCommand = `cd ${repoName} && yarn`;

// Cloning repository
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

const _dirname = path.resolve();

const packageDir = path.join(_dirname, repoName);

const packageJsonFile = path.join(packageDir, "package.json");
const examplePackageJsonFile = path.join(
  packageDir,
  "./packages/example/package.json"
);

// Setting default package.json
const packageJSON = JSON.parse(fs.readFileSync(packageJsonFile, "utf8"));
const examplePackageJSON = JSON.parse(
  fs.readFileSync(examplePackageJsonFile, "utf8")
);

packageJSON.name = repoName;
examplePackageJSON.name = `@${repoName}/example`;

fs.writeFileSync(
  `./${repoName}/package.json`,
  JSON.stringify(packageJSON, null, 2)
);

fs.writeFileSync(
  `./${repoName}/packages/example/package.json`,
  JSON.stringify(examplePackageJSON, null, 2)
);

// Removing git
const committed = runCommand(gitRemoveCommand);
if (!committed) process.exit(-1);

// Installing dependencies
console.log("\x1b[32m", `Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(
  "\x1b[32m",
  `Congratulations 🎉! You are ready. Use the following commands to start:`
);
console.log("\x1b[36m", `cd ${repoName}`);
