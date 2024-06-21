// ObservationsPage.tsx

import React, { useState } from 'react';
import { Button, Col, DatePicker, Dropdown, Input, MenuProps, Row, Select, Space, Table, message } from 'antd';
const items = [
    {
        value: '1',
        label: 'Planetas',
    },
    {
        value: '2',
        label: 'Estrelas',
    },
    {
        value: '3',
        label: 'Constelações',
    },
    {
        value: '4',
        label: 'Galáxias',
    },
    {
        value: '5',
        label: 'Outros',
    },
    {
        value: '6',
        label: 'Todos',
    },
];


const ObservationsPage: React.FC = () => {
    const [option, setOption] = useState('Type');
    const [searchValue, setSearchValue] = useState('');

    const onChange = (value: string) => {
        setOption(value);
        // console.log(`selected ${value}`);
        // console.log(`useState ${option}`);
    };

    const dataSource = [
        {
            key: 'planeta1',
            tipo: 'Planeta',
            nome: 'Júpiter',
            detalhe: 'Observação 1',
            data: '2024-06-21',
        },
        {
            key: 'planeta2',
            tipo: 'Planeta',
            nome: 'Saturno',
            detalhe: 'Observação 2',
            data: '2024-06-21',
        },
        {
            key: 'estrela1',
            tipo: 'Estrela',
            nome: 'Sirius',
            detalhe: 'Observação 3',
            data: '2024-06-21',
        },
        {
            key: 'estrela2',
            tipo: 'Estrela',
            nome: 'Betelgeuse',
            detalhe: 'Observação 4',
            data: '2024-06-21',
        },
        // Adicione outras linhas conforme necessário
    ];



    const columns = [
        {
            title: 'Tipo',
            dataIndex: 'tipo',
            key: 'tipo',
        },
        {
            title: 'Nome',
            dataIndex: 'nome',
            key: 'nome'
        },
        {
            title: 'Detalhes',
            dataIndex: 'detalhe',
            key: 'detalhe',
        },
        {
            title: 'Data',
            dataIndex: 'data',
            key: 'data',
        },
    ];

    const handleSearch = () => {
        // Lógica para realizar a pesquisa com o valor de searchValue
        console.log('Pesquisando por:', searchValue);
    };

    return (
        <div>
            <h1>Observações Astronômicas</h1>
            <div style={{ marginBottom: 16 }}>

                <Space.Compact>
                    <Input placeholder="Filtrar por nome" style={{ width: 300 }} />
                    <Select
                        showSearch
                        placeholder="Filtrar por tipo"
                        optionFilterProp="label"
                        onChange={onChange}
                        options={items}
                    />
                    <DatePicker placeholder="Filtrar por data" />
                    <Button type="primary" >
                        Pesquisar
                    </Button>
                </Space.Compact>


            </div>
            <Table dataSource={dataSource} columns={columns} />
        </div >
    );
};


export default ObservationsPage;