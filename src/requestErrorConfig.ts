import type { RequestConfig, RequestOptions } from '@umijs/max';
import { notification } from 'antd';

/**
 * @description pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const errorConfig: RequestConfig = {
  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {
    // 错误抛出
    errorThrower: (res) => {
      // 业务错误，抛出错误
      // 我是根据 Http Code 来判断的，所以不用这个
      if (res.code !== 0) {
        throw new Error(res.msg);
      }
    },
    // 错误接收及处理
    errorHandler: (error, opts) => {
      if (opts?.skipErrorHandler) throw error;
      notification.error({
        type: 'error',
        message: error.message,
        description: 'response' in error && error.response?.headers?.['x-error'],
      });
      throw error;
    },
  },

  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      // 拦截请求配置，进行个性化处理。
      const url = config?.url;
      return { ...config, url };
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      return response;
    },
  ],
};
