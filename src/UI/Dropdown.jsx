import styles from "./Dropdown.module.css";

const Dropdown = ({ children, onChange }) => {
  return (
    <select className={styles.select} onChange={onChange}>
      {children}
    </select>
  );
};

export default Dropdown;
