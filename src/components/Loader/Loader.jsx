import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles["loading-container"]}>
      <div className={styles["loading-text"]}>
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
    </div>
  );
};

export default Loader;
