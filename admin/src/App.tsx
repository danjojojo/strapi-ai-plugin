import { Page } from '@strapi/strapi/admin';
import { AppRoutes } from './AppRoutes';
import { Layout } from './components/layout/Layout';
import { PLUGIN } from './constants';
import { AppProvider } from './provider/AppProvider';

export default function App() {
  return (
    // TODO: Integrate later on <Page.Protect permissions={[]}>
    <AppProvider>
      <Page.Title>{PLUGIN.NAME}</Page.Title>
      <Layout>
        <AppRoutes />
      </Layout>
    </AppProvider>
    // </Page.Protect>
  );
}
