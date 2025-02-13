import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import { useContext, useEffect } from 'react';
import axios from './utils/axios.customize.js';
import { AuthContext } from './components/context/auth.context.jsx';
import { Spin } from 'antd';

function App() {
    const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);
    useEffect(() => {
        setAppLoading(true);
        const fetchAccount = async () => {
            const res = await axios.get('/v1/api/account');

            if (res) {
                setAuth({
                    isAuthenticated: true,
                    user: {
                        email: res?.email,
                        name: res?.name,
                    },
                });
            }
            setAppLoading(false);
        };

        fetchAccount();
    }, []);
    return (
        <div>
            {appLoading === true ? (
                <div
                    style={{
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Spin size="large" />
                </div>
            ) : (
                <>
                    <Header />
                    <Outlet />
                </>
            )}
        </div>
    );
}

export default App;
