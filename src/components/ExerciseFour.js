import { useState } from "react";

const ExerciseFour = () => {
  const initialFormData = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const [showUserData, setShowUserData] = useState(false);

  const handleFormData = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setErrorMessage("Fill All Fields *");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords Must Match *");
      return;
    }

    setErrorMessage("");
    setShowUserData(true);
  }

  const deleteUser = () => {
    setFormData(initialFormData);
    setErrorMessage("");
    setShowUserData(false);
  };

  return (
    <div className="signup">
      <form>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormData}
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormData}
          placeholder="Enter Your Password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleFormData}
          placeholder="Confirm Password"
        />
        <p className="error">{errorMessage}</p>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {showUserData && (
        <div className="user-data">
          <span>{formData.email}</span>
          <span>{formData.password}</span>
          <button onClick={deleteUser}>delete</button>
        </div>
      )}
    </div>
  );
};

export default ExerciseFour;
