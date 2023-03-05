import styles from './find-contact.module.scss';

const FindContact = ({ handleFilter }) => {
  return (
    <div className={styles.block}>
      <label className={styles.title}>Find contacts by name</label>
      <input
        name="filter"
        onChange={handleFilter}
        placeholder="Name"
        type="text"
        className={styles.input} 
      />
    </div>
  );
};

export default FindContact;
