import Avatar from "../images/Avatar.png";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const handleLogout = async () => {
  //   try {
  //     await signOut(auth);
  //     navigate("/login");
  //     // console.log("Signeout");
  //   } catch (err) {
  //     // Handle any potential errors
  //   }
  // };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="navbar">
      <span className="logo">Chatify</span>
      <div className="user">
        <img className="user-img" src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>
    </div>
  );
}
