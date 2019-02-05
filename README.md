# eslint-config-jam3

This package exposes the Jam3's ESLint config file for JS based applications.

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [Support](#support)
- [Related](#related)
- [License](#license)

## Installation

### Main package

```bash
npm i eslint-config-jam3 -D
```

### Secondary packages

Because ESLint only exports a configuration file you need to install all the plugins and configs that this file is depending on.

```bash
npm i prettier eslint babel-eslint eslint-plugin-import eslint-plugin-promise eslint-plugin-node eslint-config-prettier eslint-plugin-prettier eslint-config-standard eslint-plugin-standard -D
```

## Usage

Once installed `eslint-config-jam3` add `jam3` in your `extends` section of your [ESLint configuration](https://eslint.org/docs/user-guide/configuring)

```
{
  "extends": ["...","jam3"],
  "rules": {
    // ...
  }
}
```

## Tests

To run the tests we are using eslint cli passing our configuration by default, if eslint finds an error in the file it will throw and error.

```
$ npm test
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting
pull requests.

## Related

- [eslint-config-react-jam3](https://www.npmjs.com/package/eslint-config-react-jam3) - ESLint config for React apps used at Jam3
- [eslint-plugin-jam3](https://www.npmjs.com/package/eslint-plugin-jam3) - ESLint set of custom rules used at Jam3, including security rules

## License

[MIT](LICENSE)
