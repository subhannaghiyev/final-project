import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "antd";
import "./index.scss";
import { Helmet } from "react-helmet";
const Detailpage = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate = useNavigate()
  const { Meta } = Card;
  const getData = async () => {
    const res = await axios.get(`http://localhost:4040/news/${params.id}`);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DetailPage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="div">
        <div className="data">
          <Card
            hoverable
            style={{
              width: 262,
              textAlign: "center",
            }}
            cover={
              <img
                style={{ width: 780, height: 400, display: "inline-block" }}
                alt="example"
                src={data.img}
              />
            }
          >
            <div style={{ width: "780px", backgroundColor: "white", height: 80}}>
              <Meta
                style={{ width: "780px", textAlign: "justify" , fontFamily : "chillax-regular"}}
                description={data.description}
              />
            </div>
          </Card>
        </div>
        <button onClick={()=> navigate("/news")} className="btn-user-1" >Go back</button>
      </div>
    </>
  );
};

export default Detailpage;
