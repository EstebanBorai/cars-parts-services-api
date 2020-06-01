<div align="center">
  <h1>cars-parts-services-api</h1>
  <span>Cars Parts Services API Client</span>
</div>

## Requisites

Its required to authenticate to GPM (GitHub Package Manager) in order to install this module in your project.
Theres two possible ways at the moment to accomplish this,
either using a `.npmrc` file or login to `npm` using `npm login`.

### Personal Access Token
  - Create a [GitHub Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with the following scopes:

  Scope | Description | Repository permissions
  --- | --- | ---
  `read:packages` | Download and install packages from GitHub Packages | read
  `write:packages` | Upload and publish packages to GitHub Packages | write
  `delete:packages` | Delete specified versions of private packages from GitHub Packages | admin
  `repo` | Install, upload, and delete certain packages in private repositories (along with read:packages, write:packages, or delete:packages) | read, write, or admin
  [Source](https://docs.github.com/en/packages/publishing-and-managing-packages/about-github-packages#about-tokenss)

  Add your personal access token to your `~/.npmrc` file, edit the `~/.npmrc` file for your project to include the following line, replacing TOKEN with your personal access token. Create a new `~/.npmrc` file if one doesn't exist.

  ```bash
  //npm.pkg.github.com/:_authToken=TOKEN
  ```

### Logging to npm

  Use the npm login command, replacing `USERNAME` with your GitHub username, `TOKEN` with your personal access token, and `PUBLIC-EMAIL-ADDRESS` with your email address.

  ```bash
  $ npm login --registry=https://npm.pkg.github.com
  > Username: USERNAME
  > Password: TOKEN
  > Email: PUBLIC-EMAIL-ADDRESS
  ```
  [Source](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages)

## Installation

For npm or yarn to find this package during installation process, is required to specify the registry
of `estebanborai` scope. For that create an `.npmrc` file in your project root (next to `package.json`)
with the following content:

```bash
@estebanborai:registry=https://npm.pkg.github.com
```

Then, you must run:
```bash
# npm
npm install

# yarn
yarn
```

## Publishing

```bash
npm version <major|minor|patch>
git push origin master --follow-tags
npm publish --scope @estebanborai --tag latest
```