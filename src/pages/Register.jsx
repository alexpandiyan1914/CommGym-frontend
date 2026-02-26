import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successful 🎉");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="cg-auth" id="cg-register">
      <div className="cg-auth__card">

        <h2 className="cg-auth__title">Create Account</h2>

        <form onSubmit={handleSubmit} noValidate>

          <div className="cg-auth__field">
            <input
              type="text"
              placeholder="Full Name"
              className="cg-auth__input"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <span className="cg-auth__error">{errors.name}</span>
            )}
          </div>

          <div className="cg-auth__field">
            <input
              type="email"
              placeholder="Email"
              className="cg-auth__input"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <span className="cg-auth__error">{errors.email}</span>
            )}
          </div>

          <div className="cg-auth__field">
            <input
              type="password"
              placeholder="Password"
              className="cg-auth__input"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && (
              <span className="cg-auth__error">{errors.password}</span>
            )}
          </div>

          <div className="cg-auth__field">
            <input
              type="password"
              placeholder="Confirm Password"
              className="cg-auth__input"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
            {errors.confirmPassword && (
              <span className="cg-auth__error">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-success cg-auth__btn">
            Register
          </button>

        </form>

        <p className="cg-auth__switch">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;