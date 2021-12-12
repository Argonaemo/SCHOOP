import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="faq">
      <Navbar />
      <div className="faqContainer">
          <p>FAQ</p>
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Apa sih Schoop itu?</Accordion.Header>
            <Accordion.Body>
              Schoop adalah sebuah mobile app super yang berfokus di lingkungan sekolah, dengan tujuan baik seperti memajukan sekolah dengan fitur yang ada di dalamnya.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Fitur apa aja yang ada di Schoop</Accordion.Header>
            <Accordion.Body>
              Schoop mencakup cukup banyak bidang. Di aplikasinya sendiri contohnya ada fitur library, shop, services, food, dan juga payment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Apa Schoop Berbayar</Accordion.Header>
            <Accordion.Body>
              Tentu saja tidak. Untuk aplikasi schoop semua fiturnya gratis 100% tidak berbayar.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Apa Schoop ada di playstore?</Accordion.Header>
            <Accordion.Body>
              Untuk saat ini, saat terakhir kali admin membuat tulisan ini aplikasi schoop belum bisa didapatkan di playstore
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Apa alasan membuat Schoop</Accordion.Header>
            <Accordion.Body>
              Schoop dibuat dengan banyak tujuan baik, antara lain buat Bantu majuin sekolah, perekonomian, serta naikin minat baca.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
