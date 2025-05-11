import {
  FaTachometerAlt,
  FaClipboardList,
  FaBuilding,
  FaUsers,
  FaUserTie,
  FaCogs,
  FaSyncAlt,
} from "react-icons/fa";

const sidebarLinks = [
  { label: "Dashboard", icon: FaTachometerAlt },
  { to: "/orders", label: "Orders", icon: FaClipboardList },
  { label: "Companies", icon: FaBuilding },
  { label: "Vendors", icon: FaUsers },
  { label: "Clients", icon: FaUserTie },
  { label: "Employees", icon: FaUsers },
  { label: "Master Settings", icon: FaCogs },
  { label: "Refresh Token", icon: FaSyncAlt },
];

export default sidebarLinks;
