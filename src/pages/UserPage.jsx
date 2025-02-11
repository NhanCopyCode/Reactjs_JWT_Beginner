import { Table } from 'antd';
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

// const data = [
//     {
//         _id: '67a9ae876aa1e2551d9b19a3',
//         name: 'thanhnhangg',
//         email: 'thanhnhangg@gmail.com',
//         password: '$2b$10$s76TeAahObJ8lxS5HmqQ1ufs9N/qmTCAApTn4AWiGPrxTleaSj.d6',
//         role: 'thanhnhangg',
//         __v: 0,
//     },
//     {
//         _id: '67a9c72224b9a19a63c1c944',
//         name: 'thanhnhangg',
//         email: 'thanhnhangg1@gmail.com',
//         password: '$2b$10$Q.padapslyua59asXRdkieBvBao0fBcY1128hLo5.C6oUnYG76sUa',
//         role: 'thanhnhangg',
//         __v: 0,
//     },
//     {
//         _id: '67a9c72924b9a19a63c1c947',
//         name: 'thanhnhangg',
//         email: 'thanhnhangg2@gmail.com',
//         password: '$2b$10$VMgnNUaB7etJbKxsM9f7zONy.z6gaJpz.38ez4/UfgkgK2T.Wbi3a',
//         role: 'thanhnhangg',
//         __v: 0,
//     },
// ];

const UserPage = () => {
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getAllUsers();
            if(res) {
                setDataSource(res.data);
            }
        }
        fetchUser();
    }, []);
    return <Table columns={columns} dataSource={dataSource} rowKey={"_id"}/>;
};
export default UserPage;
