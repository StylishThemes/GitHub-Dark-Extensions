#!/usr/bin/env node
"use strict";

// this script does some cleanups after perfectionist ran

const {readFile} = require("fs").promises;
const {join} = require("path");
const {writeFile, exit} = require("./utils");

const source = join(__dirname, "..", "github-dark-extensions.css");

const replacements = [
  {from: /\{\/\*!/g, to: "{\n /*!"},
  {from: /\/\* /g, to: "\n  /* "},
  {from: /(\s+)?\n(\s+)?\n/gm, to: "\n"},
  {from: / {2}}\/\*/gm, to: "  }\n  /*"},
  {from: /,\s+\n/gm, to: ",\n"},
  {from: /,\u0020{2,}/g, to: ", "},
  {from: /\s+domain\(/g, to: " domain("},
];

async function main() {
  let css = await readFile(source, "utf8");
  for (const replacement of replacements) {
    css = css.replace(replacement.from, replacement.to);
  }
  await writeFile(source, css);
}

main().then(exit).catch(exit);
