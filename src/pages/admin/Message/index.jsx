import { Table, Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./index.scss";

const Message = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/admin" && !localStorage.getItem("adminLoggedIn")) {
      navigate("/admin/loginAdmin");
    }
  }, [location, navigate]);
  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      render: (img) => (
        <img
          style={{
            width: "75px",
            height: "75px",
            borderRadius: 52,
            border: "1px solid gray",
          }}
          src="data:image/png;base64,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"
          alt="Product"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => (
        <div
          style={{
            fontSize: 20,
            fontFamily: "chillax-regular",
            textAlign: "justify",
          }}
        >
          {name}
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (email) => (
        <div style={{ fontSize: 20, fontFamily: "chillax-regular" }}>
          {email}
        </div>
      ),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      render: (subject) => (
        <div style={{ fontSize: 20, fontFamily: "chillax-regular" }}>
          {subject}
        </div>
      ),
    },
    {
      title: "Message",
      dataIndex: "message",
      render: (message) => (
        <div style={{ fontSize: 20, fontFamily: "chillax-regular" }}>
          {message}
        </div>
      ),
    },
    {
      title: "Delete",
      dataIndex: "",
      key: "delete",
      render: (text, record) => (
        <Button
          type="danger"
          style={{
            backgroundColor: "red",
            color: "white",
            width: 80,
            height: 40,
            fontFamily: "chillax-regular",
          }}
          onClick={showDeleteConfirm}
        >
          Delete
        </Button>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 4 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4040/admin", {
          params: {
            _page: pagination.current,
            _limit: pagination.pageSize,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pagination]);

  const handleTableChange = (pagination, filters, sorter, extra) => {
    setPagination(pagination);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4040/admin/delete/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };


  const showDeleteConfirm =  (event ,record) => {
    console.log(event);
    event.stopPropagation();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(record.id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const combinedData = data.flatMap((d) => d);
  return (
    <div className="ad-message">
      <Table
        columns={columns}
        dataSource={combinedData}
        pagination={pagination}
        onChange={handleTableChange}
        onRow={(record) => ({
          onClick: (event) => {
            // if (event.target.tagName === "Button") {
            //   navigate("/admin/message")
            //   event.isPropagationStopped()
              navigate(`${record.id}`);
            // }
            // else if ( event.target.tagName !== "img" || event.target.tagName !== "div"){
            //     event.stopPropagation()
            //     navigate(`${record.id}`);
            // }
          },
        })}
      />
    </div>
  );
};

export default Message;
