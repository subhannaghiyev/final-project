import "./index.scss";
import TextField from "@mui/material/TextField";
import { Link, useNavigate} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { ProductForm } from "../../../schema";
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductForm),
  });

  const postData = async () => {
    const values = getValues();
    await axios.post("http://localhost:4040/users/register", {
      firstName: values.firstName,
      lastName: values.lastName,
      age: values.age,
      username: values.username,
      email: values.email,
      password: values.password,
    });
    navigate('/login')
  };

  return (
    <div className="login">
      <div className="modalka">
        <div className="information">
          <h3 className="destino">Destino</h3>
          <p className="create">Create an account</p>
          <form onSubmit={handleSubmit(postData)}>
            <TextField
              className="text-field"
              id="standard-basic"
              label="FirstName"
              variant="standard"
              {...register("firstName")}
            />
            {errors.firstName?.message && <p style={{color : "red"}}>{errors.firstName?.message}</p>}
            <TextField
              className="text-field"
              id="standard-basic"
              label="LastName"
              variant="standard"
              {...register("lastName")}
            />
            {errors.lastName?.message && <p style={{color : "red"}}>{errors.lastName?.message}</p>}
            <TextField
              {...register("age")}
              className="text-field"
              id="standard-basic"
              label="Age"
              variant="standard"
            />
            {errors.age?.message && <p style={{color : "red"}}>{errors.age?.message}</p>}
            <TextField
              className="text-field"
              id="standard-basic"
              label="Username"
              variant="standard"
              {...register("username")}
            />
            {errors.username?.message && <p style={{color : "red"}}>{errors.username?.message}</p>}
            <TextField
              className="text-field"
              id="standard-basic"
              label="Email"
              variant="standard"
              {...register("email")}
            />
            {errors.email?.message && <p style={{color : "red"}}>{errors.email?.message}</p>}
            <TextField
              className="text-field"
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              {...register("password")}
            />
            {errors.password?.message && <p style={{color : "red"}}>{errors.password?.message}</p>}
            <button
              // onClick={() => navigate("/login")}
              type="submit"
              className="btn"
            >
              Create Account
            </button>
          </form>
          <p className="already">
            Already have an Account ?{" "}
            <Link to="/login">
              <span style={{ cursor: "pointer", color: "deeppink" }}>
                Log in
              </span>
            </Link>
          </p>
        </div>
        <div className="slider-image">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://preview.colorlib.com/theme/destino/images/top_1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://preview.colorlib.com/theme/destino/images/top_2.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://preview.colorlib.com/theme/destino/images/top_3.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://preview.colorlib.com/theme/destino/images/top_4.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Register;
