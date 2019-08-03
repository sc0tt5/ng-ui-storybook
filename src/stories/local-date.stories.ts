import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { PipesDemoComponent, SessionService } from 'lib-shared';

storiesOf('PipesDemoComponent', module)
    .addDecorator(withKnobs)
    .addDecorator(moduleMetadata({ providers: [SessionService] }))
    .add('local date demo', () => ({
        component: PipesDemoComponent,
        props: {
            today: new Date(),
            val: 123.45
        }
    }));
