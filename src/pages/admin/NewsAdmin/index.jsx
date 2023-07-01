import { Table, Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./index.scss";

const NewsAdmin = () => {
  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      render: (img) => <img style={{ width: "380px", height: "300px" }} src={img} alt="Product" />,
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (description) => <div style={{ fontFamily: "chillax-regular" ,width:350 , textAlign:"justify"}}>{description}</div>,
    },
    {
      title: "Edit",
      dataIndex: "",
      key: "edit",
      render: (text, record) => (
        <Button style={{ background: "#1677ff", color: "white", width: 80, height: 40, fontFamily: "chillax-regular" }} onClick={() => handleEdit(record)}>
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
          style={{ backgroundColor: "red", color: "white", width: 80, height: 40, fontFamily: "chillax-regular" }}
          onClick={() => showDeleteConfirm(record)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 4 });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4040/news", {
        params: {
          _page: pagination.current,
          _limit: pagination.pageSize,
        },
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
  useEffect(() => {
  }, [pagination]);

  const handleTableChange = (pagination, filters, sorter, extra) => {
    setPagination(pagination);
  };

  const handleEdit = (record) => {
    Swal.fire({
      title: "Edit Record",
      html: `
        <input id="edit-img" type="text" placeholder="Image URL" value="${record.img}" class="swal2-input" />
        <input id="edit-description" type="text" placeholder="Description" value="${record.description}" class="swal2-input" />
      `,
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: () => {
        const editedImg = Swal.getPopup().querySelector("#edit-img").value;
        const editedDescription = Swal.getPopup().querySelector("#edit-description").value;
  
        if (!editedImg || !editedDescription) {
          Swal.showValidationMessage("Please fill in all fields");
          return false;
        }
        return {
          img: editedImg,
          description: editedDescription,
        };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const editedData = result.value;
        console.log("Edited Data:", editedData);
  
        try {
          await axios.put(`http://localhost:4040/news/update/${record.id}`, editedData);
        } catch (error) {
          console.error(error);
          // Handle the error here
        }
        fetchData()
      }
    });
  };
  // const handleEdit = (record) => {
  //   Swal.fire({
  //     title: "Edit Record",
  //     html: `
  //       <input id="edit-price" type="text" placeholder="Price" value="${record.price || ''}" class="swal2-input" />
  //     `,
  //     // ...
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       const editedPrice = Swal.getPopup().querySelector("#edit-price").value;
  
  //       // Güncellenecek verileri oluşturun
  //       const updatedData = {
  //         price: editedPrice,
  //       };
  
  //       // Axios veya fetch kullanarak güncelleme isteğini gönderin
  //       axios.put(`http://localhost:4040/travels/update/${record._id}`, updatedData)
  //         .then((response) => {
  //           // İsteğin başarıyla tamamlandığı durumda yapılacaklar
  //           console.log("Update response:", response.data);
  //           // Gerekli güncellemeleri yapın, örneğin veri listesini yeniden yükleyin
  //         })
  //         .catch((error) => {
  //           // İsteğin bir hata ile sonuçlandığı durumda yapılacaklar
  //           console.error("Update error:", error);
  //           // Hata durumunu kullanıcıya bildirin veya gerekli işlemleri yapın
  //         });
  //     }
  //   });
  // };
  
  

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
    <Table
      className="table-users"
      columns={columns}
      dataSource={data}
      pagination={pagination}
      onChange={handleTableChange}
    />
  );
};

export default NewsAdmin;
