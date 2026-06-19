import styles from "./style.module.css";

type LoaderProps = {
  text?: string;
};

export function FullscreenLoader({ text = "Определяем местоположение..." }: LoaderProps) {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.spinner} />
      <p className={styles.loaderText}>{text}</p>
    </div>
  );
}