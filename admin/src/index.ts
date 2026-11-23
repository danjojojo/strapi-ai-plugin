import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';
import { PLUGIN } from './constants';
import { getTranslation } from './utils/getTranslation';

import type { StrapiApp } from '@strapi/strapi/admin';

const plugin: StrapiApp['appPlugins'][string] = {
  register(app) {
    app.addMenuLink({
      to: PLUGIN.DEFAULT_PATH,
      icon: PluginIcon,
      intlLabel: {
        id: `${PLUGIN.ID}.plugin.name`,
        defaultMessage: PLUGIN.NAME,
      },
      Component: () => import('./App'),
      permissions: [],
    });

    app.registerPlugin({
      id: PLUGIN.ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN.ID,
    });
  },

  registerTrads({ locales }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = (await import(`./translations/${locale}.json`)) as {
            default: Record<string, string>;
          };

          const newData: Record<string, string> = {};
          const keys = Object.keys(data);

          for (const key of keys) {
            newData[getTranslation(key)] = data[key];
          }

          return { data: newData, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  },
};

export default plugin;
