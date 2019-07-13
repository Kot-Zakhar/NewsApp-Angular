export const environment = {
    production: true,
    paths: {
      home: '',
      news: 'news',
      pieceOfNews: 'news/:id'
    },
    api: {
      name: 'https://newsapi.org/v2/',
      topHeadlines: {
          name: 'top-headlines',
          params: ['apiKey', 'page', 'pageSize', 'q', 'sources', 'category', 'country'],
          defaultParams: {
            country: 'us'
          }
      },
      sources: {
          name: 'sources',
          params: ['apiKey', 'country', 'language', 'category'],
          defaultParams: {
            language: 'en'
          }
      },
      defaultQuery: {
          apiKey: '7212e3966b5c450fa48c618ebf60d8f0',
          page: 1,
          pageSize: 6
      },
      defaultParams: {
        country: 'us',
      },
      okStatus: 'ok'
    },
    alerts: {
        timeout: 3000,
        noNews: 'There are no news matching your request.',
        noMewsLeft: 'There are no more news left.',
        noNewsAvailable: 'There are no more news available to load due to limitations.',
        loaded: 'Available news are loaded.'
    },
    search: {
        minLength: 3
    },
    maxNewsAllowed: 40,
    siteTitle: 'Latest News'
};
