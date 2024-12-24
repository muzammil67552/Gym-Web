import { useState } from "react";
import { LoaderCircle } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <section className="contact">
      <form>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            placeholder="enter your Message Here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{ display: "flex", justifyContent: "center", gap: "15px" }}
        >
          {loading && <LoaderCircle size={25} color="white" />}
          SEND NOW
        </button>
      </form>
    </section>
  );
};

export default Contact;
