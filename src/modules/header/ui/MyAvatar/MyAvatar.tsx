import styles from "./style.module.css";

type Props = {
  avatarUrl: string
};

export function MyAvatar({avatarUrl}: Props) {
  return (
    <div className={styles.avatar}>
      <img
        className={styles.avatarImage}
        src={avatarUrl}
        alt="User avatar"
      />
    </div>
  );
};