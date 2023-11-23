import React from 'react';
import NavBar from './inc/navbar';
import { Layout, Breadcrumb, theme } from 'antd';
const { Header, Content, Sider, Footer } = Layout;
import Sidebar from './inc/sidebar';
import Contacts from '../content/contacts';

const BaseLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ alignItems: 'center' }}>
        <div className="demo-logo" />
        <NavBar />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Sidebar />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Contacts />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>AutoCRM ©2023 Created by Pmsdrh</Footer>
    </Layout>
  )
}

export default BaseLayout;