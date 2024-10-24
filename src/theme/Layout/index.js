import React, {useEffect} from 'react';
import Layout from '@theme-original/Layout';
import klaroConfig from '../../components/assets/config.klaro';

// Thanks to this tutorial: https://blog.bitexpert.de/blog/docusaurus_klaro_consent_manager
// Initial page generated based on instructions for wrapping here: https://docusaurus.io/docs/swizzling#wrapping
// cmd: yarn swizzle @docusaurus/theme-classic Layout --wrap

export default function LayoutWrapper(props) {
    useEffect(() => {
        const _paq = window._paq = window._paq || [];
        if (window.enableTracking === true) {
            _paq.push(['setCustomUrl', location.pathname]);
            _paq.push(['setDocumentTitle', document.title]);
            _paq.push(['trackPageView'])
        }
        import("klaro").then(Klaro => {
            // we assign the Klaro module to the window, so that we can access it in JS
            window.klaro = Klaro;
            window.klaroConfig = klaroConfig;
            Klaro.setup(klaroConfig);
            // we set up Klaro with the config
            const klaroCookie = window.document.cookie.match(new RegExp('(^| )klaro=([^;]+)'))
            // if klaroCookie is set, take no further action
            if (!klaroCookie) {
                Klaro.show();
            }
        });
    }, []);
  return (
    <>
      <Layout {...props} />
    </>
  );
}
