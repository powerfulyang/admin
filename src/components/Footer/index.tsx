import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} Powered by powerfulyang`}
      links={[
        {
          key: 'blog',
          title: "Styx's Home Page",
          href: 'https://powerfulyang.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/powerfulyang',
          blankTarget: true,
        },
        {
          key: 'source',
          title: 'Source Code',
          href: 'https://github.com/powerfulyang',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
