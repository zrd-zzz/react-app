import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import style from './admin.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
const { Header, Sider, Content } = Layout;

export default class Admin extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout className={style.global}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    className={style.sidebar}
                >
                    <div className={style.logo} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {/* <Menu.Item key="1" icon={<UserOutlined />}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            nav 3
                        </Menu.Item> */}
                        <Sidebar />
                    </Menu>
                </Sider>
                <Layout className={style.siteLayout}>
                    <Header className={style.siteLayoutBackground} style={{ padding: 0 }}>
                        {React.createElement(
                            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: `${style.trigger}`,
                                onClick: this.toggle,
                            }
                        )}
                    </Header>
                    <Content
                        className={style.siteLayoutBackground}
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
