import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [authenticated, setauthenticated] = useState(null);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("authentated");
//     if (loggedInUser) {
//       setauthenticated(loggedInUser);
//     }
//   }, []);
//   console.log("teststt", authenticated);
//   if (!authenticated) {
//     console.log("not true");
//     navigate("/login");
//   } else {
//     return (
//       <div>
//         <p>Welcome to your Dashboard</p>
//       </div>
//     );
//   }
// };

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default Dashboard;
