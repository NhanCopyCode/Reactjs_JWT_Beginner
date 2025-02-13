import { Button, Form, Input, notification } from 'antd';
import { loginApi } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../components/context/auth.context';

function Login() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const onFinish = async (values) => {
        const { email, password } = values;

        const res = await loginApi(email, password);
        if (res && res.EC === 0) {
            localStorage.setItem('access_token', res.access_token);
            setAuth({
                isAuthenticated: true,
                user: {
                    email: res?.user?.email ?? '',
                    name: res?.user?.name ?? '',
                },
            });
            notification.success({
                message: 'Login user',
                description: 'Successfully!!',
            });

            navigate('/');
        } else {
            notification.error({
                message: 'Login user',
                description: res?.EM ?? 'Failure!!',
            });
        }
    };

    return (
        <div style={{ padding: 50 }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
