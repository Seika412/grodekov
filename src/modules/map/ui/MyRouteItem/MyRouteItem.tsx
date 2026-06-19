import styles from "./style.module.css";

type Props = {
  title: string,
  subtitle: string,
  isActive: boolean
};

export function MyRouteItem({subtitle, title, isActive}: Props) {
  return (
    <li className={`${styles.listItem} ${isActive ? styles.listItemActive : ""}`}>
      <div className={styles.listContent}>
        <div className={styles.listTitle}>{title}</div>
        <p className={styles.listSubtitle}>{subtitle}</p>
      </div>

      <div className={styles.listIcon}>
        {isActive ? (
          <svg  width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="11"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />
            <path
              d="M7 12L10.5 15.5L17 9"
              stroke="#94A3B8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="#94A3B8" strokeWidth="1.5"/>
          </svg>
        )}
      </div>
    </li>
  );
};