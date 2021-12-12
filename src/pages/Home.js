import Navbar from "../components/Navbar";
import slide1 from "../public/slide1.jpg";
import slide2 from "../public/slide2.jpg";
import slide3 from "../public/slide3.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Icon } from "@iconify/react";
import home1svg from "../public/home1svg.svg";
import home2svg from "../public/home2svgg.svg";
import home3svg from "../public/home3svgg.svg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="carouselCapt">
              <h1>SCHOOP</h1>
              <p>More than School!</p>
              <button>UNDUH SEKARANG</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={slide2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="carouselCapt">
              <h1>SCHOOP</h1>
              <p>More than School!</p>
              <button>UNDUH SEKARANG</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src={slide3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="carouselCapt">
              <h1>SCHOOP</h1>
              <p>More than School!</p>
              <button>UNDUH SEKARANG</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="home1">
        <h2>Fitur Kami</h2>
        <div className="fitur-sec">
          <div className="fitur-card">
            <div className="fitur-card-atas">
            <Icon icon="fluent:library-24-regular" width="40" />
            <h5>Library</h5>
            </div>
            <p>Pinjem buku ke perpus ataupun baca e-book tanpa ribet.</p>
          </div>
          <div className="fitur-card">
            <div className="fitur-card-atas">
            <Icon icon="ant-design:shopping-cart-outlined" width="40" />
            <h5>Food</h5>
            </div>
            <p>Atasi rasa lapar kamu dengan cepat.</p>
          </div>
          <div className="fitur-card">
            <div className="fitur-card-atas">
            <Icon icon="octicon:tools-16" width="40" />
            <h5>Services</h5>
            </div>
            <p>Top up pulsa, ampe game!? Semua ada disini</p>
          </div>
        </div>
        <h4>dan masih banyak lagi!</h4>
      </div>
      <div className="home2">
        <h2>
          Kenapa Harus
          <br />
          SCHOOP
        </h2>
        <div className="home2-sec">
          <div className="home2-card">
            <div className="home2-card-word">
              <h5 style={{color:"#f2c94c"}}> 1.</h5>
              <h3>
                Pinjem Buku
                <br />
                Gak Pake Ribet
              </h3>
              <p>Gak perlu antri dan pusing pilih buku lagi.</p>
            </div>
            <img src={home1svg} alt="" />
          </div>
          <div className="home2-card">
            <img src={home2svg} alt="" />

            <div className="home2-card-word">
              <h5 style={{color:"#f2c94c"}}> 2.</h5>

              <h3>
                Baca Buku
                <br />
                Dimana Aja
              </h3>
              <p>Konvensional ataupun digital, kamu yang tentuin tempatnya.</p>
            </div>
          </div>
          <div className="home2-card">
            <div className="home2-card-word">
              <h5 style={{color:"#f2c94c"}}> 3.</h5>

              <h3>
                Jajan Cepet
                <br />
                dan Gampang
              </h3>
              <p>
                Mulai dari barang, makanan, hingga jasa. Bisa kamu temuin disini.
              </p>
            </div>
            <img src={home3svg} alt="" />
          </div>
          <h4 style={{marginTop: "10vh"}}>dan Masih Banyak Lagi!</h4>
        </div>
        <div className="home2-close">
          <h5>Tunggu Apalagi</h5>
          <button>UNDUH SEKARANG</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
