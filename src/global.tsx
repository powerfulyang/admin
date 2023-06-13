import microApp from '@micro-zoe/micro-app';

const isDev = process.env.NODE_ENV === 'development';

export const system = {
  name: 'system',
  url: isDev ? 'http://localhost:9000' : 'https://powerfulyang.com/system/',
  'keep-alive': true,
  'disable-memory-router': true,
};

microApp.start({
  preFetchApps: [system],
});
