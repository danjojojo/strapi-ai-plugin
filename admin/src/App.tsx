import { Page } from '@strapi/strapi/admin';

import { AppRoutes } from './AppRoutes';
import { PLUGIN_NAME } from './constants';
import { Layout } from './components/layout/Layout';

export default function App() {
  return (
    // TODO: Integrate later on <Page.Protect permissions={[]}>
    <>
      <Page.Title>{PLUGIN_NAME}</Page.Title>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
    // </Page.Protect>
  );
}
