import { Button, Checkbox, Form, Input } from 'antd';
import { Link} from "react-router-dom";
import "../../unauthorized/forget/Forget.css";

const Forget = () => (
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
      <Button  className='btn' type="primary" htmlType="submit">
        Submit
      </Button>
  
  
        <Link to={"/Logins"}>Back to Login</Link>

  </Form>
  </div>
);
export default Forget;


