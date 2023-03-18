/**
 * @see 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 *
 * @doc https://umijs.org/docs/guides/proxy
 */
export default {
  dev: {
    '/api/': {
      target: 'https://local.powerfulyang.com',
      changeOrigin: true,
      pathRewrite: { '^': '' },
      cookieDomainRewrite: { 'powerfulyang.com': 'localhost' },
    },
  },
  qa: {
    '/api/': {
      target: 'https://qa.powerfulyang.com',
      changeOrigin: true,
      pathRewrite: { '^': '' },
      cookieDomainRewrite: { 'powerfulyang.com': 'localhost' },
    },
  },
  prod: {
    '/api/': {
      target: 'https://powerfulyang.com',
      changeOrigin: true,
      pathRewrite: { '^': '' },
      cookieDomainRewrite: { 'powerfulyang.com': 'localhost' },
    },
  },
};
