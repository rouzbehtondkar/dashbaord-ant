import { Typography,Space,Table, Avatar, Rate } from "antd";
import { useEffect, useState } from "react";
import { getInventvory, getOrders } from "../../API";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

function Orders() {
  const [loading, setLoading] = useState(false);

  const [dataSource, setDataSoure] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
        setDataSoure(res.products);
        setLoading(false);
    });
  }, []);

  return (
    <Space size={30} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
      loading={loading}

        columns={[
            
            {
                title: "Tilte",
                dataIndex: "title",
              },
              {
                title: "Price",
                dataIndex: "price",
                render:(value)=><span>${value}</span>
              },
              {
                title: "Quantity",
                dataIndex: "quantity",
              
              },
              {
                title: "DiscountedPrice",
                dataIndex: "discountedPrice",
                render:(value)=><span>${value}</span>
              },
              {
                title: "Total",
                dataIndex: "total",
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
export default Orders;
