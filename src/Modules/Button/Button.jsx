import styles from './button.module.css';

const Button = ({ removeContact, id }) => {
  return (
    <button
      onClick={() => removeContact(id)}
      className={`${styles.btn} ${styles.deleteBtn}`}
      type="button"
    >
      Delete
    </button>
  );
};

export default Button;
