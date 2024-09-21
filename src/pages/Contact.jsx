export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />

          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
          />

          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
