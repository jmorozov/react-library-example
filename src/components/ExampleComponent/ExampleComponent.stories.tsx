import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ExampleComponent } from './ExampleComponent';
import { text } from '@storybook/addon-knobs/react';

const stories = storiesOf('ExampleComponent', module);

stories.add('ExampleComponent', () => <ExampleComponent text={text('text', 'Some text')} />, {
   info: { inline: true },
   text: `

  ### Notes

  Simple example component

  ### Usage
  ~~~js
  <ExampleComponent
    text="Some text"
  />
  ~~~

`
});
