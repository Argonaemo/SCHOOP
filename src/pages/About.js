import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import schoolSvg from '../public/schoolsvg.svg'
import moneySvg from '../public/moneysvg.svg'
import booklovesSvg from '../public/booklovesvg.svg'

const About = () => {
    return ( 
        <div className="about">
            <Navbar/>
            <div className="aboutContainer">
                <h5>About Us</h5>
                <h1>Kenalan Yuk sama Schoop.</h1>
                <div className="aboutSec">
                    <img src={schoolSvg} alt="" />
                    <div className="aboutTulisan">
                        <h2>Majuin Sekolah</h2>
                        <p>Yap betul, tujuan utama dari aplikasi schoop adalah majuin sekolah. Dengan adanya fitur seperti library, e-book, food, dan lain-lain kami harap warga sekolah pengguna aplikasi ini mendapatkan kemudahan</p>
                    </div>
                </div>
                <div className="aboutSec">
                    
                    <div className="aboutTulisan">
                        <h2>Bantu Perekonomian</h2>
                        <p>Gak semua orang loh keadaannya sama. Oleh karena itu Schoop juga diciptakan untuk membantu perekonomian khususnya untuk warga sekolah</p>
                    </div>
                    <img src={moneySvg} alt="" />
                </div>
                <div className="aboutSec">
                    <img src={booklovesSvg} alt="" />
                    <div className="aboutTulisan">
                        <h2>Naikin Minat Baca</h2>
                        <p>Dengan adanya peminjaman cepat dan juga fitur e-book di aplikasi schoop, kami harap ini bisa jadi alat bantu buat naikin niat baca warga sekolah</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default About;