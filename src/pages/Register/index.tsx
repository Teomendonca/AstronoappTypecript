import React, { useState } from 'react';
import { AppRouting } from '../../App.routing';
import { useNavigate } from 'react-router-dom';
import './style.css'
import {UploadOutlined} from '@ant-design/icons'
import { Input, DatePicker, Button, Upload, Form, Space, Select } from 'antd';

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
const Registro = () => {
    
    const [form] = Form.useForm();
    const [option, setOption] = useState('Type');

    const onChange = (value: string) => {
        setOption(value);
        // console.log(`selected ${value}`);
        // console.log(`useState ${option}`);
    };
    const onFinish = (values: any) => {
        console.log('Valores do formulário:', values);
    };

    return (
        <div className='container'>
            <h1>Registrar novo</h1>
            <Form form={form} onFinish={onFinish}>
                <Space.Compact>
                    <Form.Item name="nome"  style={{ width: 500 }}>
                        <Input placeholder='Inserir nome'/>
                    </Form.Item>
                    <Form.Item name="tipo" style={{ width: 150 }}>
                        <Select
                            showSearch
                            placeholder="Seleciona tipo"
                            optionFilterProp="label"
                            onChange={onChange}
                            options={items}
                        />
                    </Form.Item>

                    <Form.Item name="data">
                        <DatePicker />
                    </Form.Item>

                </Space.Compact>
                <Form.Item name="descricao">
                    <Input.TextArea placeholder='Inserir Descrição'/>
                </Form.Item>
                <Form.Item name="imagem">
                    <Upload>
                        <Button type='dashed' icon={<UploadOutlined/>}>Adicionar imagem</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Salvar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Registro;

