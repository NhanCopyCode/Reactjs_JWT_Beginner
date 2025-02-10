import { useState } from 'react';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const items = [
    {
        label: <Link to={'/'}>Home page</Link>,
        key: 'home',
        icon: <MailOutlined />,
    },
    {
        label: <Link to="/user">Users</Link>,
        key: 'user',
        icon: <MailOutlined />,
    },
    {
        label: 'Welcome thanhnhangg',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                label: 'Đăng nhập',
                key: 'login',
            },
            {
                label: 'Đăng xuất',
                key: 'logout',
            },
        ],
    },
];
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;
