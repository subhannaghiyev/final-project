import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "./index.scss";
const Add = () => {
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
  
    const handleButtonClick = async () => {
        if (selectedOption === "http://localhost:4040/travels") {
          const { value: formValues } = await Swal.fire({
            title: "Post Data",
            html:
              '<input id="img" class="swal2-input" placeholder="Image URL">' +
              '<input id="price" class="swal2-input" placeholder="Price">' +
              '<input id="country" class="swal2-input" placeholder="Country">',
            focusConfirm: false,
            preConfirm: () => {
              const img = document.getElementById("img").value;
              const price = document.getElementById("price").value;
              const country = document.getElementById("country").value;
              return { img, price, country };
            },
          });
      
          if (formValues) {
            try {
              await axios.post(selectedOption, {
                img: formValues.img,
                price: formValues.price,
                country: formValues.country,
              });
              Swal.fire("Success!", "Post successful", "success");
              toast.success("Message Sent Successfully!");
            } catch (error) {
              Swal.fire("Error!", "An error occurred", "error");
              console.error(error);
            }
          }
        } else if (selectedOption === "http://localhost:4040/sliders") {
            const { value: formValues } = await Swal.fire({
                title: "Post Data",
                html:
                  '<input id="img" class="swal2-input" placeholder="Image URL">' +
                  '<input id="description" class="swal2-input" placeholder="Description">' +
                  '<input id="country" class="swal2-input" placeholder="Country">',
                focusConfirm: false,
                preConfirm: () => {
                  const img = document.getElementById("img").value;
                  const description = document.getElementById("description").value;
                  const country = document.getElementById("country").value;
                  return { img, description, country };
                },
              });
          
              if (formValues) {
                try {
                  await axios.post(selectedOption, {
                    img: formValues.img,
                    description: formValues.description,
                    country: formValues.country,
                  });
                  Swal.fire("Success!", "Post successful", "success");
                  toast.success("Message Sent Successfully!");
                } catch (error) {
                  Swal.fire("Error!", "An error occurred", "error");
                  console.error(error);
                }
              }
        }
        else if (selectedOption === "http://localhost:4040/news") {
            const { value: formValues } = await Swal.fire({
                title: "Post Data",
                html:
                  '<input id="img" class="swal2-input" placeholder="Image URL">' +
                  '<input id="description" class="swal2-input" placeholder="Description">',
                focusConfirm: false,
                preConfirm: () => {
                  const img = document.getElementById("img").value;
                  const description = document.getElementById("description").value;
                  return { img,description };
                },
              });
          
              if (formValues) {
                try {
                  await axios.post(selectedOption, {
                    img: formValues.img,
                    description: formValues.description,
                  });
                  Swal.fire("Success!", "Post successful", "success");
                  toast.success("Message Sent Successfully!");
                } catch (error) {
                  Swal.fire("Error!", "An error occurred", "error");
                  console.error(error);
                }
              }
        }
        else if (selectedOption === "http://localhost:4040/offers") {
            const { value: formValues } = await Swal.fire({
                title: "Post Data",
                html:
                '<input id="img" class="swal2-input" placeholder="Image URL">' +
                '<input id="price" class="swal2-input" placeholder="Price">' +
                '<input id="country" class="swal2-input" placeholder="Country">' +
                '<input id="info" class="swal2-input" placeholder="Info">' +
                '<input id="description" class="swal2-input" placeholder="Description">',
                focusConfirm: false,
                preConfirm: () => {
                  const img = document.getElementById("img").value;
                  const price = document.getElementById("price").value;
                  const country = document.getElementById("country").value;
                  const info = document.getElementById("info").value;
                  const description = document.getElementById("description").value;
                  return { img,price,country,info,description };
                },
              });
          
              if (formValues) {
                try {
                  await axios.post(selectedOption, {
                    img: formValues.img,
                    price: formValues.price,
                    country: formValues.country,
                    info: formValues.info,
                    description: formValues.description,
                  });
                  Swal.fire("Success!", "Post successful", "success");
                  toast.success("Message Sent Successfully!");
                } catch (error) {
                  Swal.fire("Error!", "An error occurred", "error");
                  console.error(error);
                }
              }
        }
      };      
  
    const handlePostDataClick = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "This action will post the data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Post",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          handleButtonClick();
        }
      });
    };
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <>
        <div className="select">
          <select
            className="selectt"
            name=""
            id=""
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="http://localhost:4040/travels">Home</option>
            <option value="http://localhost:4040/sliders">Sliders</option>
            <option value="http://localhost:4040/news">News</option>
            <option value="http://localhost:4040/offers">Offers</option>
          </select>
          <button className="btn-data" onClick={handlePostDataClick}>
            PostData
          </button>
        </div>
      </>
    );
  };
  
  export default Add;
  
