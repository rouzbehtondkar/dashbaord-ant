import React from "react";
import { Form, Input, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import "./Logins.css";
import { useAuth } from "./AuthContext";

const Logins = () => {
  const { formikConfig } = useAuth();
  const formik = useFormik(formikConfig);

  const { getFieldProps, touched, errors, isSubmitting } = formik;

  return (
    <div className="appBg">
      <Form className="loginForm" onFinish={formik.handleSubmit}>
        <h1>Welcome to the login form</h1>
        <Form.Item label="Username">
          <Input prefix={<UserOutlined />} {...getFieldProps("username")} />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password prefix={<LockOutlined />} {...getFieldProps("password")} />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </Form.Item>
        <Divider>or Login with</Divider>
      </Form>
    </div>
  );
};

export default Logins;
