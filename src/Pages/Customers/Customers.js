import { Typography,Space,Table, Avatar, Rate } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventvory, getOrders } from "../../API";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

function Customers() {
  const [loading, setLoading] = useState(false);

  const [dataSource, setDataSoure] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
        setDataSoure(res.users);
        setLoading(false);
        
    });
  }, []);

  return (
    <Space size={30} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
      loading={loading}

        columns={[
            {
                title: "Photo",
                dataIndex: "image",
                render:(Link)=>{
                    return <Avatar src={Link}/>
                }
              },
            
            {
                title: "FirstName",
                dataIndex: "firstName",
              },
              {
                title: "LastName",
                dataIndex: "lastName",
      
              },
              {
                title: "Email",
                dataIndex: "email",
              
              },
              {
                title: "Phone",
                dataIndex: "phone",
            },
            {
                title: "Address",
                dataIndex: "address",
                render:(address)=><span>{address.address}, {address.city}</span>
              },
           
             
            
        ]}

        dataSource={dataSource}
        pagination={{
            pageSize:5,
        }}
      ></Table>
    </Space>
  );
}
export default Customers ;
