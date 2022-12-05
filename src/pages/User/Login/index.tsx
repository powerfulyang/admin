import {
  GithubOutlined,
  GoogleCircleFilled,
  LockOutlined,
  UserOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { loginWithEmail } from '@/services/swagger/user';
import { history, useModel } from '@umijs/max';
import { Form, message } from 'antd';
import { flushSync } from 'react-dom';
import { getPageQuery } from '@/utils/getPageQuery';

const ActionIcons = () => {
  const langClassName = useEmotionCss(({ token }) => {
    return {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    };
  });

  const login = (app: string) => {
    const redirect = getPageQuery('redirect') || window.location.origin;
    history.push(`https://api.powerfulyang.com/api/user/${app}/auth?redirect=${redirect}`);
  };

  return (
    <>
      <GoogleCircleFilled
        onClick={() => {
          login('google');
        }}
        key="GoogleCircleFilled"
        className={langClassName}
      />
      <GithubOutlined
        onClick={() => {
          login('github');
        }}
        key="GithubOutlined"
        className={langClassName}
      />
      <WechatOutlined
        onClick={() => {
          return message.warning('Not implemented yet');
        }}
        key="WechatOutlined"
        className={langClassName}
      />
    </>
  );
};

const Login: React.FC = () => {
  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const [form] = Form.useForm<API.UserLoginDto & { remember: boolean }>();
  const { setInitialState } = useModel('@@initialState');

  useEffect(() => {
    const email = localStorage.getItem('login.email');
    const password = localStorage.getItem('login.password');
    if (email && password) {
      form.setFieldsValue({
        email,
        password,
        remember: true,
      });
    }
  }, [form]);

  const loginMutation = useMutation({
    mutationFn: (values: API.UserLoginDto) => {
      return loginWithEmail(values);
    },
    onSuccess(data) {
      const redirect = getPageQuery('redirect') || '/';
      const { email, password, remember } = form.getFieldsValue();
      if (remember) {
        localStorage.setItem('login.email', email);
        localStorage.setItem('login.password', password);
      } else {
        localStorage.removeItem('login.email');
        localStorage.removeItem('login.password');
      }
      flushSync(() => {
        setInitialState({
          currentUser: data,
        });
      });
      history.push(redirect);
    },
  });

  return (
    <div className={containerClassName}>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm<API.UserLoginDto>
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="https://admin.powerfulyang.com/static/logo.e004bb82.png" />}
          title="中央登录中心"
          subTitle="欢迎登录"
          actions={['其他登录方式', <ActionIcons key="icons" />]}
          onFinish={(values) => {
            return loginMutation.mutateAsync(values);
          }}
          form={form}
        >
          <ProFormText
            name="email"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
            }}
            placeholder="用户名或邮箱"
            rules={[
              {
                required: true,
                message: '请输入用户名或邮箱！',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined />,
            }}
            placeholder="密码"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
          <ProFormCheckbox name="remember">自动登录</ProFormCheckbox>
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
