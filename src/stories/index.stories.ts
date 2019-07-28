import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/angular';
import { Welcome } from '@storybook/angular/demo';
import { ButtonComponent } from 'lib-shared';

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {}
}));

storiesOf('button', module)
  .add('basic', () => ({
    component: ButtonComponent,
    props: {
      text: 'Hello'
    }
  }))
  .add('disabled', () => ({
    component: ButtonComponent,
    props: {
      text: 'Disabled',
      disabled: true
    }
  }));
