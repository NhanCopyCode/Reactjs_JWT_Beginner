import { notification, Table } from 'antd';
import { getAllUsers } from '../utils/api';
import { useEffect, useState } from 'react';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Password',
        dataIndex: 'password',
    },
    {
        title: 'Roles',
        dataIndex: 'role',
    },
];


const UserPage = () => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getAllUsers();
            console.log('Check response Userpage::', res);
            if (!res?.message) {
                setDataSource(res.data);
            } else {
                console.log('sai rồi');
                notification.error({
                    message: 'Unauthorized',
                    description: res.message,
                });
            }
        };
        fetchUser();
    }, []);
    return <Table columns={columns} dataSource={dataSource} rowKey={'_id'} />;
};
export default UserPage;
