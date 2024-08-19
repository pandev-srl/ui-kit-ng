import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { UiAlertComponent } from './ui-alert.component';
import { uiThemes } from '../../models';
import { UiIconModule } from '../../ui-icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<UiAlertComponent> = {
  title: 'Alert',
  component: UiAlertComponent,
  decorators: [moduleMetadata({ imports: [UiIconModule] })],
  tags: ['autodocs'],
  args: {
    theme: 'primary',
  },
  argTypes: {
    theme: {
      description: 'The color theme you want to apply',
      options: uiThemes,
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    title: {
      type: 'string',
      description: 'You can add a title to your alert',
    },
    description: {
      type: 'string',
      description: 'The main text of your alert',
    },
    icon: {
      type: 'string',
      description: 'An icon name used by ui-icon component',
    },
  },
  parameters: {
    docs: {
      description: { component: `Used to display alerts` },
    },
  },
};
export default meta;

type Story = StoryObj<UiAlertComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis posuere risus.',
  },
};

export const WithTitle: Story = {
  name: 'With a title',
  args: {
    title: 'Alert with a title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis posuere risus.',
  },
};

export const WithIconAndTitle: Story = {
  name: 'With icon and title',
  args: {
    title: 'Alert with a title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis posuere risus.',
    icon: 'fa-triangle-exclamation',
  },
};
