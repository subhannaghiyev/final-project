import React, { useEffect, useState } from "react";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CiPlay1 } from "react-icons/ci";
import "./styles.css";
import { Pagination } from "swiper";
import axios from "axios";
import { Helmet } from "react-helmet";
const Home = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [destination, setDestination] = useState("");
  const [adventureType, setAdventureType] = useState("Categories");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [value, setValue] = useState("");
  const [sort, setSort] = useState(false)
  const [filteredData, setFilteredData] = useState(
    data.filter((d) => d.id > 4 && d.id < 10)
  );
  const [country, setCountry] = useState("");
  const getData = async () => {
    const res = await axios.get("http://localhost:4040/travels");
    setData(res.data);
    console.log(res.data);
  };

  const getData2 = async () => {
    const res = await axios.get("http://localhost:4040/sliders");
    setData2(res.data);
    console.log(res.data);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeCountry = (value) => {
    setCountry(value);
  };
const Sorting = ()=>{
  let arr = []
  if (sort===false) {
    setSort(true)
    arr = [...data].sort((a,b)=>{
      return a.price-b.price;
    });
  }else {
    setSort(false)
    arr = [...data].sort((a,b)=>{
      return b.price-a.price;
    });
  }
  setData(arr)
}
  // const handleFilter = () => {
  //   console.log("Data:", data);
  //   // Apply your filtering logic here based on the selected values
  //   const filteredData = data.filter((d) => {
  //     // Filter by destination (case-insensitive)
  //     const destinationMatch = d.country
  //       .toLowerCase()
  //       .includes(destination.toLowerCase());
  //     console.log("Destination Match:", destinationMatch);

  //     // Filter by adventure type
  //     const adventureTypeMatch = d.country === adventureType;
  //     console.log("Adventure Type Match:", adventureTypeMatch);

  //     // Filter by price range
  //     const minPriceMatch = minPrice === "" || d.price >= parseInt(minPrice);
  //     console.log("Min Price Match:", minPriceMatch);
  //     const maxPriceMatch = maxPrice === "" || d.price <= parseInt(maxPrice);
  //     console.log("Max Price Match:", maxPriceMatch);

  //     return (
  //       destinationMatch || adventureTypeMatch || minPriceMatch || maxPriceMatch
  //     );
  //   });

  //   console.log("Filtered Data:", filteredData);

  //   setFilteredData(filteredData);
  // };

  useEffect(() => {
    getData();
    getData2();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="div">
        <div className="discover">
          <p className="text-p">Discover</p>
        </div>
        <div className="discover-2">
          <p className="p-text">Discover new worlds</p>
        </div>
      </div>

      <div className="sect-2-5">
        <div className="text-h3">
          <h3 className="h3">Find the Adventure of a lifetime</h3>
        </div>
        <div className="input">
          <div
            style={{ display: "flex",alignItems:'center', gap: "10px" }}
          >
            <div style={{ display: "flex",flexDirection:'column',gap:10}}>
            <label
              style={{ textAlign: "start", fontFamily: "chillax-regular" }}
            >
              Destination:
            </label>
            <input
              onChange={handleChange}
              className="inp"
              type="text"
              placeholder="Keyword here"
              // value={destination}
              // onChange={(e) => setDestination(e.target.value)}
            />
            </div>
            <button className="btn" onClick={Sorting}>Find</button>
          </div>
        </div>
      </div>

      <div className="sect-3-2">
        <h4 className="h4-2">Top destinations in Europe</h4>
        <p className="p-sect-3-2">TAKE A LOOK AT THESE OFFERS</p>
      </div>
      {/* data */}
      <div className="images">
        {data
          .filter(
            (item) =>
              item.country.toLowerCase().includes(value.toLowerCase()) &&
              (country === "" || item.country === country)
          )
          .map((d) => {
            if (d.id > 4 && d.id < 10) {
              return (
                <div className="image-data-1" key={d.id}>
                  <div className="image-1">
                    <img className="image-data" src={d.img} alt="" />
                  </div>
                  <div className="text-1">
                    <p className="p-dollar">From {d.price}$</p>
                    <div style={{ display: "flex", gap: 10 }}>
                      <p className="p-country">{d.country},</p>
                      <p className="p-country">{d.capital}</p>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
      </div>

      <div className="sect-4">
        <div className="imgs">
          <img
            className="img"
            src="https://preview.colorlib.com/theme/destino/images/last_logo.png"
            alt=""
          />
        </div>
        {/* <div className="absolute">
          <p className="maldive">Maldive</p>
        </div> */}
        <div className="back-image">
          <div>
            <p className="maldive">Maldive</p>
            <p className="degree">50%</p>
            <p className="last-minute">Last Minute Offer</p>
            <div className="btn-display">
              <p className="text-sect-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor vel
              </p>
              <button className="btn-2">See Offer</button>
            </div>
          </div>
        </div>
        <div className="back-image">
          <div>
            <p className="maldive">Bali</p>
            <p className="degree">38%</p>
            <p className="last-minute">Last Minute Offer</p>
            <div className="btn-display">
              <p className="text-sect-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor vel
              </p>
              <button className="btn-2">See Offer</button>
            </div>
          </div>
        </div>
      </div>

      <div className="sect-5">
        <div className="video-text">
          <p className="video-p">A day on the island</p>
          <p className="video-p-1">A trip organized by Destino's team</p>
          <CiPlay1
            style={{
              color: "white",
              fontSize: 40,
              borderRadius: "55%",
              border: "2px solid white",
              padding: "46px 46px",
              marginTop: 10,
            }}
          />
        </div>
      </div>

      <div className="sect-3-home">
        <h4 className="h4-home">Popular destinations in 2018</h4>
        <p className="p-sect-3-home">TAKE A LOOK AT THESE OFFERS</p>
      </div>

      <div className="sect-6-home">
        {data.map((d) => {
          if (d.id > 9) {
            return (
              <div className="div-images" key={d.id}>
                <div className="imagess">
                  <img className="image-size" src={d.img} alt="" />
                </div>
                <div className="text-dollar">
                  <p className="text-p">From ${d.price}</p>
                  <p className="text-p-1">{d.country}</p>
                </div>
              </div>
            );
          }
          return null; // Return null for data with id <= 5 to skip rendering
        })}
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data2.map((d) => (
          <SwiperSlide className="sildes">
            <div className="images-slider">
              <img className="img" src={d.img} alt="" />
            </div>
            <div className="slide-text">
              <p className="p-slide">{d.description}</p>
              <p className="p-slides">{d.country}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="about-background">
        <div className="last-section-column">
          <div className="last-section-p">
            <p className="p-last">Subscribe to our Newsletter</p>
          </div>
          <div className="last-section-input">
            <input
              className="last-section-inp"
              type="text"
              name=""
              id=""
              placeholder="Your E-mail Address"
            />
            <button className="last-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
