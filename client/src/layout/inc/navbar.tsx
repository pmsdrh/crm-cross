import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));


const NavBar: React.FC = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items} />
    )
}


export default NavBar;