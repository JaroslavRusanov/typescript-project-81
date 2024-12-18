### Hexlet tests and linter status:
[![Actions Status](https://github.com/JaroslavRusanov/typescript-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/JaroslavRusanov/typescript-project-81/actions)   [![ActionGitHub CI](https://github.com/JaroslavRusanov/typescript-project-81/actions/workflows/ActionGitHubCI.yaml/badge.svg)](https://github.com/JaroslavRusanov/typescript-project-81/actions/workflows/ActionGitHubCI.yaml)   [![Maintainability](https://api.codeclimate.com/v1/badges/3e9956e5c44dcec56f24/maintainability)](https://codeclimate.com/github/JaroslavRusanov/typescript-project-81/maintainability)   [![Test Coverage](https://api.codeclimate.com/v1/badges/3e9956e5c44dcec56f24/test_coverage)](https://codeclimate.com/github/JaroslavRusanov/typescript-project-81/test_coverage)


# Form Generator

This is a TypeScript library that allows you to create forms in website templates.

### Example
```
const template = { name: 'rob', job: 'hexlet', gender: 'm' };
const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
    f.submit('Wow');
});

console.log(form);

// Will log:
// <form action="/users" method="post">
//   <label for="name">Name</label>
//   <input name="name" value="" type="text">
//   <label for="job">Job</label>
//   <textarea cols="20" rows="40" name="job"></textarea>
//   <input type="submit" value="Wow">
//</form>
```

## Install
```
npm install
```
