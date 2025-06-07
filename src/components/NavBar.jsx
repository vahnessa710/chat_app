import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center bg-indigo-700 text-white px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold">"Insert App Name Here"</h1>
      
      <div className="flex items-center gap-4">
        <button
          onClick={handleLogout}
          className="bg-indigo-400 text-orange-50 px-4 py-2 rounded hover:bg-blue-100 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
