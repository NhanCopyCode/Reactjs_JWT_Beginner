import { useContext, useState } from 'react';
import { MailOutlined, SettingOutlined, setTwoToneColor } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const [current, setCurrent] = useState('mail');
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    console.log('auth: ', auth);
    const items = [
        {
            label: <Link to={'/'}>Home page</Link>,
            key: 'home',
            icon: <MailOutlined />,
        },
        ...(auth?.isAuthenticated
            ? [
                  {
                      label: <Link to="/user">Users</Link>,
                      key: 'user',
                      icon: <MailOutlined />,
                  },
              ]
            : []),
        {
            label: `Welcome ${auth?.user?.name}`,
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                ...(!auth?.isAuthenticated
                    ? [
                          {
                              label: <Link to="/login">Đăng nhập</Link>,
                              key: 'login',
                          },
                          {
                              label: <Link to="/register">Đăng ký</Link>,
                              key: 'logout',
                          },
                      ]
                    : []),
                ...(auth?.isAuthenticated
                    ? [
                          {
                              label: (
                                  <span
                                      onClick={() => {
                                          localStorage.clear('access_token');
                                          setCurrent('home');
                                          navigate('/login');
                                          setAuth({
                                              isAuthenticated: false,
                                              user: {
                                                  email: '',
                                                  name: '',
                                              },
                                          });
                                      }}
                                  >
                                      Đăng xuất
                                  </span>
                              ),
                          },
                      ]
                    : []),
            ],
        },
    ];
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;
