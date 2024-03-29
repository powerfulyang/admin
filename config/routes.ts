﻿/**
 * @description 只支持 path,component,routes,redirect,wrappers,title 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user/login',
    layout: false,
    routes: [
      {
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/',
    routes: [
      {
        path: '/',
        redirect: '/user/list',
      },
      {
        path: '/user',
        access: 'canAdmin',
        routes: [
          {
            path: '/user',
            redirect: '/user/list',
          },
          {
            path: '/user/list',
            component: './User/List',
          },
        ],
      },
      {
        path: '/system/*',
        component: './System',
      },
      {
        path: '/asset',
        access: 'canAdmin',
        routes: [
          {
            path: '/asset/list',
            component: './Asset/List',
          },
          {
            path: '/asset/similar-check',
            component: './Asset/SimilarCheck',
          },
        ],
      },
      {
        path: '/post',
        access: 'canAdmin',
        routes: [
          {
            path: '/post/list',
            component: './Post/List',
          },
        ],
      },
      {
        path: '/feed',
        access: 'canAdmin',
        routes: [
          {
            path: '/feed/list',
            component: './Feed/List',
          },
        ],
      },
      {
        path: '/notification',
        access: 'canAdmin',
        routes: [
          {
            path: '/notification/list',
            component: './Notification/List',
          },
        ],
      },
      {
        path: '/logs',
        access: 'canAdmin',
        routes: [
          {
            path: '/logs/list',
            component: './Logs/List',
          },
        ],
      },
      {
        path: '*',
        component: './404',
      },
    ],
  },
];
