import { action } from '@storybook/addon-actions';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { ButtonComponent, CommonService } from 'lib-shared';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
// @ts-ignore
import markdown from './my-button.notes.md';

storiesOf('ButtonComponent', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      providers: [CommonService]
    })
  )
  .add(
    'basic',
    () => ({
      component: ButtonComponent,
      props: {
        icon: 'globe',
        text: text('Button Text', 'Hello', 'General'),
        message: text('Console Message', 'button click from storybook...', 'General'),
        myEvent: action('Hello ButtonComponent from Storybook!')
      }
    }),
    {
      notes: { markdown }
    }
  )
  .add('disabled', () => ({
    component: ButtonComponent,
    props: {
      icon: 'globe',
      text: text('Button Text', 'Hello', 'General'),
      message: text('Console Message', 'button click from storybook...', 'General'),
      myEvent: action('Hello ButtonComponent from Storybook!'),
      disabled: boolean('Disabled', true, 'General')
    }
  }));
