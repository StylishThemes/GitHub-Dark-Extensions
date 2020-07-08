#!/usr/bin/env node
"use strict";

const {readFile, readdir} = require("fs").promises;
const fastGlob = require("fast-glob");
const {writeFile, exit} = require("./utils");

const globSync = (pattern) => fastGlob.sync(pattern, {cwd: __dirname, absolute: true});

const files = {
  source: globSync("../github-dark-extensions.css")[0],
  usercss: globSync("../github-dark-extensions.user.css")[0],
  template: globSync("./usercss-template.css")[0],
};

const replacements = [
  {from: /\/\*\[\[base-color\]\]\*\/ #\w{3,6}/g, to: "/*[[base-color]]*/"},
  {from: /\s+\/\* usercss build - remove start[\s\S]+usercss build - remove end \*\/$/m, to: ""},
];

const defaults = {
  color: "#4f8cc9",
};

function replaceForUsercss(css) {
  for (const replacement of replacements) {
    css = css.replace(replacement.from, replacement.to);
  }
  return css;
}

function replaceVars(css) {
  Object.keys(defaults).forEach(key => {
    css = css.replace(`{{${key}}}`, defaults[key]);
  });
  const version = css.match(/github\sdark\sextensions\sv([\d.]+) \(/i);
  if (version) {
    css = css.replace("{{version}}", version[1]);
  }
  return css;
}

async function main() {
  let meta = await readFile(files.template, "utf8");
  let css = await readFile(files.source, "utf8")
  css = replaceForUsercss(css);

  css = replaceVars(`${meta}${css}`);
  await writeFile(files.usercss, css);

  console.info("\u001B[32m%s\u001B[0m", "GitHub Dark Extensions usercss build complete");
}

main().then(exit).catch(exit);
