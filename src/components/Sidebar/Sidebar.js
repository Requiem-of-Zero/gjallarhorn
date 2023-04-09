import { motion } from "framer-motion";

const Sidebar = ({ sidebar }) => {
  return (
    <motion.div animate={{ width: sidebar ? "20rem" : "0px" }} id="sidebar">
      <ul>
        <li>LOBSTER</li>
        <li>LOBSTER</li>
        <li>LOBSTER</li>
        <li>LOBSTER</li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
