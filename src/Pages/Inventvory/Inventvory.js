import { Typography,Space,Table, Avatar, Rate } from "antd";
import { useEffect, useState } from "react";
import { getInventvory } from "../../API";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

function Inventvory() {
  const [loading, setLoading] = useState(false);

  const [dataSource, setDataSoure] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventvory().then((res) => {
        setDataSoure(res.products);
        setLoading(false);
    });
  }, []);

  return (
    <Space size={30} direction="vertical">
      <Typography.Title level={4}>Inventvory</Typography.Title>
      <Table
      loading={loading}

        columns={[
            {
                title: "Thumbnail",
                dataIndex: "thumbnail",
                render:(Link)=>{
                    return <Avatar src={Link}/>
                }
              },
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
                title: "Rrating",
                dataIndex: "rating",
                render:(rating)=>{
                    return <Rate value={rating} allowHalf disabled/>
                }
              },
              {
                title: "Stock",
                dataIndex: "stock",
              },
           
              {
                title: "Category",
                dataIndex: "category",
              },
              {
                title: "Brand",
                dataIndex: "brand",
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
export default Inventvory;
