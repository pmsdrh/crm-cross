import { Menu } from 'antd';
import React from 'react';
import type { MenuProps } from 'antd/es/menu';
type MenuItem = Required<MenuProps>['items'][number];
import { Icon } from '@iconify/react';

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('داشبورد', '1', (<Icon icon="ic:twotone-dashboard" color="#39FF14" width="26" height="26" />)),
  getItem('افراد', '2', (<Icon icon="ic:twotone-contact-page" color="#FF5E00" width="26" height="26" />)),
  getItem('معاملات', '3', (<Icon icon="ic:twotone-data-exploration" color="#BC13FE" width="26" height="26" />)),
];

const Sidebar: React.FC = () => {
    return (
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
        items={items}
      />
    )
}

export default Sidebar;