import React, { useState } from 'react';
import { AppRouting } from '../../App.routing';
import { useNavigate } from 'react-router-dom';
import './style.css'
import { Button, Divider, Layout, Menu, MenuProps, MenuTheme, theme } from 'antd';
// DashboardPage.tsx

import { Table } from 'antd';

const DashboardPage: React.FC = () => {
    const dataSource = [
        {
            key: 'planetas',
            tipo: 'Planetas',
            total: 10,
            data: '2024-06-21',
        },
        {
            key: 'estrelas',
            tipo: 'Estrelas',
            total: 50,
            data: '2024-06-21',
        },
        {
            key: 'constelacoes',
            tipo: 'Constelações',
            total: 20,
            data: '2024-06-21',
        },
        {
            key: 'galaxias',
            tipo: 'Galáxias',
            total: 30,
            data: '2024-06-21',
        },
        {
            key: 'outros',
            tipo: 'Outros',
            total: 15,
            data: '2024-06-21',
        },
        // Adicione mais linhas conforme necessário
    ];


    const columns = [
        {
            title: 'Tipo',
            dataIndex: 'tipo',
            key: 'tipo',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Data',
            dataIndex: 'data',
            key: 'data',
        },
    ];

    return (
        <div>
            <h1>Tabela Geral</h1>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default DashboardPage;

// const Dashboard: React.FC = () => (
// <div>
//     Dashboard

// </div>
// );

// export default Dashboard;