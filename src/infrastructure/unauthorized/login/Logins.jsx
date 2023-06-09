import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button, Divider, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate ,Router,Routes,Link} from "react-router-dom";
import "./Logins.css";



const Logins = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate("/");

      if (typeof window !== 'undefined') {

        localStorage.setItem('user',token);
      }
    }
  }, [authenticated, navigate, token]);


  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      skipCaptcha: true,
    },
    validationSchema: Yup.object({
      username: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      password: Yup.string().min(4, "Must be 4 characters or more").required("Required"),
    }),
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values, { setSubmitting }) {
    try {
      const response = await axios.post("https://sanab.farzinahmadi.com/api/auth/login", values);
      console.log(response);
      notification.success({
        message: "Login Successful",
        description: "You have successfully logged in.",
      });
      const { token } = response.data;
      setAuthenticated(true);
      setToken(token);
    } catch (error) {
      console.log("Error occurred while processing the request.", error);
      notification.error({
        message: "Login Failed",
        description: "Failed to process the request. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const { getFieldProps, touched, errors, isSubmitting } = formik;


  return (
   
      <div className="appBg">
        <Form className="loginForm" onFinish={formik.handleSubmit}>
          <h1>Welcome to the login form</h1>
          <Form.Item
            label="Username"
            help={touched.username && errors.username ? errors.username : undefined}
            validateStatus={touched.username && errors.username ? "error" : undefined}
          >
            <Input prefix={<UserOutlined />} {...getFieldProps("username")} />
          </Form.Item>
          <Form.Item
            label="Password"
            help={touched.password && errors.password ? errors.password : undefined}
            validateStatus={touched.password && errors.password ? "error" : undefined}
          >
            <Input.Password prefix={<LockOutlined />} {...getFieldProps("password")} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </Form.Item>
          <Link to={"/regester"} >forget password?</Link>
          <Link to={"/forget"}>sing up?</Link>

        </Form>
      </div>

  );
};

export default Logins;
