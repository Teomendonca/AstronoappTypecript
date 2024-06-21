import React, { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MailOutlined,
  HomeOutlined,
  BookOutlined,
  FileAddOutlined
} from '@ant-design/icons';
import { Divider, Layout, Menu, MenuProps, MenuTheme, theme } from 'antd';
import { AppRouting } from '../../App.routing';
import { useNavigate } from 'react-router-dom';
import './style.css'


const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
// const items: MenuItem[] = [

//   {
//     key: 'item1',
//     label: 'Dashboard',
//     icon: <HomeOutlined />,
//   },
//   {
//     key: 'item2',
//     label: 'Observations',
//     icon: <BookOutlined />,
//   },
//   {
//     key: 'item3',
//     label: 'Registrar',
//     icon: <FileAddOutlined />,
//   },
// {
//   key: 'item4',
//   label: 'Galaxias',
//   icon: <MailOutlined />,
// },
// {
//   key: 'item5',
//   label: 'Outros',
//   icon: <MailOutlined />,
// },
// ];
const SideMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='sideMenu'>
      <div className="logo">
        <h2 id='title'>Astronoapp</h2>
      </div>
      <Menu theme="dark" mode="vertical" items={[
        {
          key: 'item1',
          label: 'Dashboard',
          icon: <HomeOutlined />,
          onClick: ()=> navigate('/')
        },
        {
          key: 'item2',
          label: 'Observations',
          icon: <BookOutlined />,
          onClick: ()=> navigate('/observacao')
        },
        {
          key: 'item3',
          label: 'Registrar',
          icon: <FileAddOutlined />,
          onClick: ()=> navigate('/registrar')
        }
      ]} />
    </div>
  ) 
};

export default SideMenu;