import React, { Component } from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;
export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>博客后台管理系统</h1>
                </div>
                <Menu theme="dark" defaultOpenKeys={['sub3']} mode="inline">
                    <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">文章发布</Menu.Item>
                    <SubMenu key="sub3" title={'博客管理'}>
                        <Menu.Item key="sub3.1">文章管理</Menu.Item>
                        <Menu.Item key="sub3.2">评论管理</Menu.Item>
                        <Menu.Item key="sub3.3">分类专栏</Menu.Item>
                        <Menu.Item key="sub3.4">订阅专栏</Menu.Item>
                        <Menu.Item key="sub3.5">博客搬家</Menu.Item>
                        <Menu.Item key="sub3.6">博客打赏</Menu.Item>
                        <Menu.Item key="sub3.7">博客设置</Menu.Item>
                        <Menu.Item key="sub3.8">博主名片</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4">数据统计</Menu.Item>
                    <Menu.Item key="5">下载管理</Menu.Item>
                    <Menu.Item key="6">创建活动</Menu.Item>
                    <Menu.Item key="7">用户中心</Menu.Item>
                </Menu>
            </div>
        );
    }
}
