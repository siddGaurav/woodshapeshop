import FooterMain from "../../component/footer/FooterMain";
import Header from "../../component/header/Header";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <Header />
      <main className="contactPage">
        <div className="contactPage__inner">
          <h1 className="contactPage__title">Contact Us</h1>
          <p className="contactPage__lead">
            Have a question about our wood products or interiors? Send us a
            message and we&apos;ll get back to you.
          </p>

          <div className="contactPage__grid">
            <section className="contactCard" aria-labelledby="contact-details">
              <h2 id="contact-details" className="contactCard__heading">
                Reach us
              </h2>
              <p>
                <strong>Phone:</strong> +91 9105860614
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:woodshape@wood.com">woodshape@wood.com</a>
              </p>
              <p className="contactCard__note">
                We typically reply within one business day.
              </p>
            </section>

            <section className="contactForm" aria-labelledby="contact-form-title">
              <h2 id="contact-form-title" className="contactCard__heading">
                Send a message
              </h2>
              <form
                className="contactForm__form"
                onSubmit={(e) => e.preventDefault()}
              >
                <label className="contactForm__field">
                  <span>Name</span>
                  <input type="text" name="name" autoComplete="name" />
                </label>
                <label className="contactForm__field">
                  <span>Email</span>
                  <input type="email" name="email" autoComplete="email" />
                </label>
                <label className="contactForm__field">
                  <span>Message</span>
                  <textarea name="message" rows={5} />
                </label>
                <div className="contactForm__actions">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
      <FooterMain />
    </>
  );
}

export default ContactUs;
