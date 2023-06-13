import { stringify } from 'querystring';
import { LinkOutlined, TeamOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { PageLoading } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import { Button, Modal, Result } from 'antd';
import type { BreadcrumbItemType } from 'antd/lib/breadcrumb/Breadcrumb';
import type { ReactElement } from 'react';
import { isChildApplicationPath } from '@/utils/isChildApplicationPath';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
import { logout, queryCurrentUser, queryCurrentUserMenus } from './services/swagger/user';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

const goLogin = () => {
  history.replace({
    pathname: loginPath,
    search: stringify({
      redirect: window.location.href,
    }),
  });
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.User;
  name?: string;
  avatar?: string;
}> {
  const fetchUserInfo = () => {
    return queryCurrentUser({
      skipErrorHandler: true,
    });
  };
  // 如果不是登录页面，执行
  if (window.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      currentUser,
      settings: defaultSettings,
      name: currentUser?.nickname,
      avatar: currentUser?.avatar,
    };
  }
  return {
    settings: defaultSettings,
  };
}

const iconMap = {
  'user-manage': <TeamOutlined />,
};

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState, loading }) => {
  return {
    ...initialState?.settings,
    className: isChildApplicationPath() ? '_child-path' : '',
    waterMarkProps: {
      content: initialState?.currentUser?.nickname,
    },
    menu: {
      request: async () => {
        const menus = await queryCurrentUserMenus();
        return menus.map((menu) => {
          return { ...menu, icon: iconMap['user-manage'] };
        });
      },
      locale: false,
    },
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        goLogin();
      }
    },
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    // 自定义 403 页面
    unAccessible: (
      <Result
        status="403"
        title="403"
        subTitle="您没有访问权限，请联系管理员"
        extra={
          <Button type="primary" onClick={() => goLogin()}>
            切换账号
          </Button>
        }
      />
    ),
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      if (loading) return <PageLoading />;
      return children;
    },
    logout: async () => {
      await logout();
      await setInitialState((s) => ({ ...s, currentUser: undefined }));
      goLogin();
    },
    breadcrumbRender: ((routers: BreadcrumbItemType[]) => {
      return [
        {
          title: 'Home',
        },
        ...routers.map((item: BreadcrumbItemType) => {
          return {
            title: item.title,
          };
        }),
      ];
    }) as any,
    breadcrumbProps: {
      itemRender: (route: BreadcrumbItemType) => {
        if (route.title === 'Home') {
          return <Link to="/">Home</Link>;
        }
        return route.title;
      },
    } as any,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 a-hooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
};

export const rootContainer = (element: ReactElement) => {
  return element;
};

export const reactQuery = {
  queryClient: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: 0,
      },
    },
  },
};

export const onRouteChange = () => {
  Modal.destroyAll();
};
