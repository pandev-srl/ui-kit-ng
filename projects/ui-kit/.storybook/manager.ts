import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import packajeJson from '../package.json';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: `Pandev Ui Kit for Angular v${packajeJson.version}`,
  }),
});
