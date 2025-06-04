import styles from "./Input.module.css";

const Input = ({ id, type, required, placeholder, value, setValue, label,...props }) => {
  const handleChange = (e) => {
    const newValue = type === 'checkbox' ? e.target.checked : e.target.value;
    setValue(newValue);
  };

  return (
    <div className={styles.inputWrapper}>
      {type === 'checkbox' ? (
        <label className={styles.checkboxLabel}>
          <input
            id={id}
            type="checkbox"
            checked={value}
            onChange={handleChange}
            className={styles.checkbox}
            required={required}
            {...props}
          />
          {label && <span>{label}</span>}
        </label>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={styles.inputBox}
          required={required}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
