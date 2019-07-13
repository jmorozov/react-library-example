import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
   req.keys().forEach(req);
}

configure(loadStories, module);

addDecorator(withInfo);
addDecorator(withKnobs);
