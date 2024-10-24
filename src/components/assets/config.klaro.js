const klaroConfig = {
    version: 1,
    elementID: 'klaro',
    styling: {
        theme: ['dark', 'right'],
        green1: '#ff7300',
        blue1: '#ff7300'
    },
    noAutoLoad: false,
    htmlTexts: true,
    embedded: false,
    groupByPurpose: true,
    storageMethod: 'cookie',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 365,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,
    lang: 'en',
    services: [
        {
            name: 'clarity',
            default: false,
            title: 'Microsoft Clarity',
            purposes: ['analytics'],
            cookies: [
                    [/^_cl[cs]k$/],
            ],
            callback: function(consent, service) {
                if(consent == true)
                {
                    window.clarity('consent');
                }
            },
            required: false,
            optOut: false,
            onlyOnce: true
        }
    ]
};

export default klaroConfig;