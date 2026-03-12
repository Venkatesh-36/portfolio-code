import "./Logo.css";
import user from "../../assets/images/user.png";
export default function Logo({ children }) {
  return (
    <div id="logo">
      <img src={user} />
      <p>{children}</p>
    </div>
  );
}