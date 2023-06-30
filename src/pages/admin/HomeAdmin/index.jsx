import { Table, Button, Modal, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./index.scss";

const Home = () => {
  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      render: (img) => (
        <img
          style={{ width: "250px", height: "300px" }}
          src={img}
          alt="Product"
        />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (price) => (
        <div style={{ fontFamily: "chillax-regular" }}>
          Price:{" "}
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      ),
    },
    {
      title: "Country",
      dataIndex: "country",
      render: (country) => (
        <div style={{ fontFamily: "chillax-regular" }}>{country}</div>
      ),
    },
    {
      title: "Edit",
      dataIndex: "",
      key: "edit",
      render: (text, record) => (
        <Button
          style={{
            background: "#1677ff",
            color: "white",
            width: 80,
            height: 40,
            fontFamily: "chillax-regular",
          }}
          onClick={() => {
            setModal2Open(true);
            editClick(data);
          }}
        >
          Edit
        </Button>
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
          onClick={() => showDeleteConfirm(record)}
        >
          Delete
        </Button>
      ),
    },
  ];
  const handleTableChange = (pagination, filters, sorter, extra) => {
    setPagination(pagination);
  };

  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 4 });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4040/travels", {
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
  useEffect(() => {
    fetchData();
  }, [pagination]);

  const [state, setState] = useState({
    img: "",
    price: "",
    country: "",
  });
  const [userId, setUserId] = useState("");
  const [modal2Open, setModal2Open] = useState(false);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const editClick = (record) => {
    setState({
      img: record.img,
      price: record.price,
      country: record.country,
    });
    if (!isNaN(record._id)) {
      setUserId(record._id);
    } else {
      console.error("Invalid userId:", record._id);
    }
  };

  const updateData = async () => {
    try {
      console.log(state);
      await axios.put(state ,`http://localhost:4040/travels/update/${userId}`,);
      await fetchData();
    } catch (error) {
      console.error(error);
      // Handle the error here
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4040/travels/delete/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const showDeleteConfirm = (record) => {
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

  return (
    <>
      <Table
        className="table-users"
        columns={columns}
        dataSource={data}
        pagination={pagination}
        onChange={handleTableChange}
      />
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => {
          setModal2Open(false);
          updateData();
        }}
        onCancel={() => setModal2Open(false)}
      >
        <label>Enter Image</label>
        <Input
          name="image"
          onChange={handleChange}
          value={state.img}
          placeholder="Enter image"
        />

        <label>Enter Price</label>
        <Input
          name="price"
          onChange={handleChange}
          value={state.price}
          placeholder="Enter price"
        />

        <label>Enter Country</label>
        <Input
          name="counrty"
          onChange={handleChange}
          value={state.country}
          placeholder="Enter counrty"
        />
      </Modal>
    </>
  );
};

export default Home;
