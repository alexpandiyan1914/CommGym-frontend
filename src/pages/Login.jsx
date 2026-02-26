import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      alert("Login Successful 🚀");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="cg-auth" id="cg-login">
      <div className="cg-auth__card">

        <h2 className="cg-auth__title">Login to <span className="com-clr">Comm</span>Gym</h2>

        <form onSubmit={handleSubmit} noValidate>

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

          <button type="submit" className="btn btn-success cg-auth__btn">
            Login
          </button>

        </form>

        <p className="cg-auth__switch">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;