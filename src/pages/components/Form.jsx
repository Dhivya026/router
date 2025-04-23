

const Form = () => {
  return (
    <form className="form-wrapper">
      <input type="text" placeholder="Enter Name" required />
      <input type="email" placeholder="Enter Email" required />
      <textarea placeholder="Your Message" rows="4" required />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Form;
