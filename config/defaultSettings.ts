import { Settings as LayoutSettings } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  title: 'Admin',
  navTheme: 'light',
  colorPrimary: '#1677FF',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  pwa: false,
  logo: 'https://powerfulyang.com/icons/apple-touch-icon.png',
  siderMenuType: 'sub',
  splitMenus: false,
};

export default Settings;
