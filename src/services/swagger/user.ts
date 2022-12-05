// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取当前登录用户信息 GET /api/user/current */
export async function getCurrentUser(options?: { [key: string]: any }) {
  return request<API.User>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 使用用户名密码登录 POST /api/user/login */
export async function loginWithEmail(body: API.UserLoginDto, options?: { [key: string]: any }) {
  return request<any>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 登出 POST /api/user/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<any>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取当前用户的菜单 GET /api/user/menus */
export async function queryCurrentUserMenus(options?: { [key: string]: any }) {
  return request<API.Menu[]>('/api/user/menus', {
    method: 'GET',
    ...(options || {}),
  });
}
