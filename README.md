# react-library-example

> Simple example of react library with typescript, rollup, jest, storybook, eslint and prettier

## Install

```bash
npm i -s git+https://github.com/jmorozov/react-library-example.git
```

## Usage

```tsx
import * as React from 'react';
import 'react-library-example/dist/index.css';
import { ExampleComponent } from 'react-library-example';

class Example extends React.Component {
   render() {
      return <ExampleComponent text="Test" />;
   }
}
```

## License

MIT © [jmorozov](https://github.com/jmorozov)
