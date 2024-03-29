import { configure, addParameters } from '@storybook/angular';
import customtheme from './customtheme.js';

addParameters({
    options: {
        theme: customtheme
    }
});

// automatically import all files ending in *.stories.ts
const req = require.context('../src/stories', true, /\.stories\.ts$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
