import { useState } from "react";

const ExerciseFour = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showUserData, setShowUserData] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.email.trim() ||
      !formData.password.trim() ||
      !formData.confirmPassword.trim()
    ) {
      setErrorMessage("Fill all fields *");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords must match *");
      return;
    }

    setErrorMessage("");
    setShowUserData(true);
  };

  const handleDeleteUser = () => {
    setFormData({ email: "", password: "", confirmPassword: "" });
    setErrorMessage("");
    setShowUserData(false);
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm password"
        />
        <p className="error">{errorMessage}</p>
        <button type="submit">Submit</button>
      </form>
      {showUserData && (
        <div className="user-data">
          <span>{formData.email}</span>
          <span>{formData.password}</span>
          <button onClick={handleDeleteUser}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ExerciseFour;
