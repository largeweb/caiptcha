// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [email, setEmail] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Thank you for joining the CaptchAway.ai waitlist!`);
//     // Here you would typically handle the form submission, e.g., sending the email to your server
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to CaptchAway.ai</h1>
//         <p>
//           Tired of solving captchas? CaptchAway.ai is your solution. Our
//           AI-powered tool seamlessly handles captcha verification, letting you
//           focus on what's important. Join our waitlist and say goodbye to
//           captcha distractions!
//         </p>
//         <form onSubmit={handleSubmit} className="waitlist-form">
//           <input
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//             placeholder="Enter your email"
//             className="email-input"
//           />
//           <button type="submit" className="submit-button">
//             Join Waitlist
//           </button>
//         </form>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for joining the CaptchAway.ai waitlist!`);
    // Here you would typically handle the form submission
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
