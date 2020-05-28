import React from 'react';
import {components} from '@shopify/argo-host';
import {AppProvider} from '@shopify/polaris';
import {createPlainWorkerFactory} from '@shopify/web-worker';

import {SubscriptionHost} from './SubscriptionHost';
import {HostProps} from './types';
import {ThemeConfig} from '@shopify/polaris/types/latest/src/utilities/theme';

const {default: Logo} = require('../src/assets/logo/logo.svg');

const reactThirdPartyWorker = createPlainWorkerFactory(() =>
  import(/* webpackChunkName: 'extension' */ '../src')
);

export {HostWrapper as Host};

function HostWrapper() {
  const theme: ThemeConfig = {
    colors: {
      topBar: {
        background: '#FAFAFA',
      },
    },
    logo: {
      topBarSource: Logo,
      url: '/',
      accessibilityLabel: 'Shopify',
    },
  };

  return (
    <AppProvider theme={theme} i18n={{}}>
      <Host script={reactThirdPartyWorker.url} components={components} />
    </AppProvider>
  );
}

function Host(props: HostProps) {
  return <SubscriptionHost {...props} />
}
