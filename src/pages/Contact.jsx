import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const Navigate = useNavigate();

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="contact-buttons">
        <button onClick={() => Navigate("info")}>Information</button>
        <button onClick={() => Navigate("form")}>Form</button>
      </div>
    </div>
  );
};