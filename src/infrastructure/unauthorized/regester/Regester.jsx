import { Button, Checkbox, Form, Input } from 'antd';
import { Link} from "react-router-dom";
import "../../unauthorized/regester/Regester.css";

const Regester = () => (
  <div className='appBg'>

  
  <Form className='loginForm'
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}

  >
           <h1>Welcome to the singup form</h1>
    <Form.Item 
    className='emailElement'
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="Confirm"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      
      <Input.Password />

    </Form.Item>
      <Button  className='btn' type="primary" htmlType="submit">
        signup
      </Button>
  
  
        <Link to={"/Logins"}>already have an account?Login</Link>

  </Form>
  </div>
);
export default Regester;


