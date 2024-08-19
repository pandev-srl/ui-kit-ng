import type { Meta, StoryObj } from '@storybook/angular';
import { UiActionMessagesComponent } from './ui-action-messages.component';
import { uiThemes } from '../models';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<UiActionMessagesComponent> = {
  title: 'Action messages',
  component: UiActionMessagesComponent,
  tags: ['autodocs'],
  args: {
    theme: 'accent',
    messages: [],
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
    messages: {
      description: 'A list of messages to display',
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `UiActionMessagesComponent. Used to display feedbacks form actions. It's based on UiAlertComponent.`,
      },
    },
  },
};
export default meta;

type Story = StoryObj<UiActionMessagesComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    theme: 'primary',
    messages: ['Message 1', 'Message 2'],
  },
};
