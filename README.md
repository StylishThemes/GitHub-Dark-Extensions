GitHub-Dark-Extensions<p align="center">
  <img alt="githubdark-logo" src="https://cdn.jsdelivr.net/gh/StylishThemes/logos@master/github.dark/githubdark-mini.svg" width="580">
  <br>
  <a href="https://github.com/StylishThemes/GitHub-Dark-Extensions/tags">
    <img src="https://img.shields.io/github/tag/StylishThemes/GitHub-Dark-Extensions.svg?label=version&style=flat" alt="Version">
  </a>
  <a href="https://github.com/StylishThemes/GitHub-Dark-Extensions/stargazers">
    <img src="https://img.shields.io/github/stars/StylishThemes/GitHub-Dark-Extensions.svg?style=flat" alt="Stars">
  </a>
  <a href="https://github.com/StylishThemes/GitHub-Dark-Extensions/network">
    <img src="https://img.shields.io/github/forks/StylishThemes/GitHub-Dark.svg?style=flat" alt="Forks">
  </a>
  <a href="https://david-dm.org/StylishThemes/GitHub-Dark-Extensions?type=dev">
    <img src="https://img.shields.io/david/dev/StylishThemes/GitHub-Dark-Extensions.svg?label=devDependencies&style=flat" alt="devDependencies">
  </a>
  <a href="https://gitter.im/StylishThemes/GitHub-Dark-Extensions">
    <img src="https://img.shields.io/gitter/room/StylishThemes/Github-Dark.js.svg?maxAge=2592000&style=flat" alt="Gitter">
  </a>
</p>
<h2 align="center">Your eyes will&nbsp;:heart:&nbsp;you.</h2>

## Preview

![Preview of GitHub Dark Extensions](./images/screenshots/after_blue.png)

## Installation

Install [Stylus](https://add0n.com/stylus.html) for either [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) or [Opera](https://addons.opera.com/en-gb/extensions/details/stylus/) or [Cascadea for Safari](https://cascadea.app/) and then install using one of these methods:

📦 [Install the usercss](https://raw.githubusercontent.com/StylishThemes/GitHub-Dark-Extensions/master/github-dark-extensions.user.css) which supports automatic updates and customization.<br>
📦 [Install manually from GitHub](https://raw.githubusercontent.com/StylishThemes/GitHub-Dark-Extensions/master/github-dark-extensions.css) with no customization, but useful for development. The style is in Mozilla format.<br>

## Supported GitHub Extensions

💾 [Gitako](https://github.com/EnixCoda/Gitako)<br>
💾 [GitHub Hovercard](https://github.com/Justineo/github-hovercard)<br>
💾 [GitHub Notifications Dropdown](https://openuserjs.org/scripts/joeytwiddle/Github_Notifications_Dropdown)<br>
💾 [GitHub Polls](https://github.com/apex/gh-polls)<br>
💾 [Lovely forks](https://github.com/musically-ut/lovely-forks#lovely-forks)<br>
💾 [npmhub](https://github.com/npmhub/npmhub)<br>
💾 [OctoLinker](https://github.com/OctoLinker/OctoLinker)<br>
💾 [Octotree](https://github.com/buunguyen/octotree/#octotree)<br>
💾 [Refined GitHub](https://github.com/sindresorhus/refined-github)<br>
💾 [ZenHub](https://www.zenhub.io/)<br>
💾 [Notifications Preview for GitHub](https://github.com/tanmayrajani/notifications-preview-github)<br>

## Contributions

If you would like to contribute to this repository, please...

1. 👓 Read the [contribution guidelines](.CONTRIBUTING.md).
1. [![fork](https://user-images.githubusercontent.com/136959/42383736-c4cb0db8-80fd-11e8-91ca-12bae108bccc.png) Fork](https://github.com/StylishThemes/GitHub-Dark/fork) or [![cloud-download](https://user-images.githubusercontent.com/136959/42401932-9ee9cae0-813d-11e8-8691-16e29a85d3b9.png) download](https://github.com/StylishThemes/GitHub-Dark/archive/master.zip) this repository.
1. 👌 Create a pull request!

## Development

First, make sure you have these installed:

- [`node`](https://nodejs.org): version 12 or greater
- [`yarn`](https://classic.yarnpkg.com/en/docs/install/): version 1
- `make`: comes with Unix-like OS, on Windows use [this](https://stackoverflow.com/a/54086635/808699)

To get started, run `make deps` after which you can use the following `make` scripts:

## Development scripts

- `make build`: Runs the `generate` and `usercss` tasks.
- `make usercss`: Build the [Usercss](https://github.com/openstyles/stylus/wiki/Usercss) style.
- `make themes`: Parse the theme files and combine them into minified styles in the `themes` directory.
- `make clean`: Reformat `github-dark-extensions.css` to conform to the style guide.
- `make lint`: Run Stylelint on `github-dark-extensions.css`.
- `make authors`: Regenerate the `AUTHORS` file based on git history.
- `make generate`: Regenerate auto-generated CSS rules compiled from various public sources.
- `make update`: Update and install dependencies.

## Internal use scripts (not for pull requests)

- `make patch`: Increment the patch version number, update file headers, create a commit and push it to `origin`.
- `make minor`: Increment the minor version number, update file headers, create a commit and push it to `origin`.
- `make major`: Increment the major version number, update file headers, create a commit and push it to `origin`.

Thanks to all that have [contributed](./AUTHORS) so far!
