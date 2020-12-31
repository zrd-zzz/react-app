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
                    <Menu.Item key="1">文章发布</Menu.Item>
                    <SubMenu key="sub3" title={'博客管理'}>
                        <Menu.Item key="1">文章管理</Menu.Item>
                        <Menu.Item key="2">评论管理</Menu.Item>
                        <Menu.Item key="3">分类专栏</Menu.Item>
                        <Menu.Item key="4">订阅专栏</Menu.Item>
                        <Menu.Item key="5">博客搬家</Menu.Item>
                        <Menu.Item key="6">博客打赏</Menu.Item>
                        <Menu.Item key="7">博客设置</Menu.Item>
                        <Menu.Item key="8">博主名片</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="1">数据统计</Menu.Item>
                    <Menu.Item key="1">下载管理</Menu.Item>
                    <Menu.Item key="1">创建活动</Menu.Item>
                    <Menu.Item key="1">用户中心</Menu.Item>
                </Menu>
            </div>
        );
    }
}
