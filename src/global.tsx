import microApp from '@micro-zoe/micro-app';

const isDev = process.env.NODE_ENV === 'development';

export const system = {
  name: 'system',
  url: isDev ? 'http://localhost:9000' : 'https://system.powerfulyang.com',
  'disable-memory-router': true,
  'disable-patch-request': true,
};

microApp.preFetch([system]);
microApp.start();
