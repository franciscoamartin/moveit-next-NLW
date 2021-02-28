import styles from "../styles/components/Profile.module.css";

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/20363204?s=460&u=ea7b7c6b5d1b2f6b602ec3c543d39c9ccda64109&v=4"
        alt="Francisco Martin"
      />
      <div>
        <strong>Francisco Martin</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;
