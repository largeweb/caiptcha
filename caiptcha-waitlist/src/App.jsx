import React, { useState } from "react";
import "./App.css";

const baseURL = import.meta.env.VITE_BASE_URL;

function App() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${baseURL}/submit-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const responseBody = await response.text();
      alert(responseBody); // Or handle the response in a more user-friendly way
      setEmail(""); // Reset the email field after successful submission
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting your email.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>cAIptcha.com</h1>
        <p>
          Say goodbye to the hassle of solving captchas! cAIptcha.com uses
          cutting-edge AI technology to seamlessly handle captcha challenges for
          you.
        </p>
        <p>
          Join our waitlist today and be among the first to experience the
          convenience of captcha-free browsing, powered by artificial
          intelligence.
        </p>
        <form onSubmit={handleSubmit} className="waitlist-form">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="email-input"
          />
          <button type="submit" className="submit-button">
            Join Waitlist
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
