import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { send } from "emailjs-com";
import { Icon } from "@iconify/react";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const [isSend, setIsSend] = useState(false)

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    send(
      "service_s9md23j",
      "template_l3l24h1",
      toSend,
      "user_R1NbyMwM2hxW3KrxVFNXj"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSend(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({
      from_name: "",
      to_name: "",
      message: "",
      reply_to: "",
    });
  };

  return (
    <div className="contact">
      <Navbar />
      <div className="contactContainer">
        <h5>Contact</h5>
        <h1>Punya pertanyaan, pesan atau masukan?</h1>
        <h1>Kami siap dengerin Kamu.</h1>
        <div className={isSend? "isSend" : "notSend"}>
        <Icon icon="akar-icons:chat-approve" height="30" />
        <h4>Pesan terkirim, Terimakasih :D</h4>
        </div>
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            name="from_name"
            placeholder="Masukin nama kamu*"
            value={toSend.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="to_name"
            placeholder="Untuk siapa*"
            value={toSend.to_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="message"
            placeholder="Pesanmu*"
            value={toSend.message}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Emailmu*"
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
          <button type="submit">Kirim</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
