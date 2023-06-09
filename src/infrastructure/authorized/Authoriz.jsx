import {
  FileOutlined,
  DesktopOutlined,
  TeamOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import RouteAuthorized from '../../route/RouteAuthorized'
import { useLocation, useNavigate } from "react-router-dom";
import  { useEffect } from 'react';
import SlidBar from "./slidbar/SlidBar";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const Authoriz = () => {
  const location=useLocation();
  const [selectedKey,SetSelectedKey] = useState('/');
 

    useEffect(() => {
      const pathName=location.pathname
      SetSelectedKey(pathName)
      
    },[location.pathname])
    
    const navigate=useNavigate(); 

  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>

    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
           <SlidBar/>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content>
          <RouteAuthorized/>
       
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
</>
   
  );
};
export default Authoriz;
