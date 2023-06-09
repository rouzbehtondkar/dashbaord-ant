import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from 'react'
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function SlidBar() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate=useNavigate(); 
    const [selectedKey,SetSelectedKey] = useState('/');
    const { Header, Content, Footer, Sider } = Layout;
  return (
    <>
    <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
      className="SideMenuVertical"
      mode="vertical"
      onClick={(item)=>{
        navigate(item.key);
      }}
      selectedKey={[selectedKey]}
      items={[
          {
            label: "Dashbord",
            key: "/",
          },
          {
            label: "Inventvory",
            key: "/inventvory",
          },
          {
            label: "Orders",
            key: "/orders",
          },
          {
            label: "Customers",
            key: "/customers",
          },
        ]}></Menu>
      </Sider></>
  )
}
