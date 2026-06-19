import styles from "./style.module.css";
import {MyAudio} from "../../ui/MyAudio/myAudio.tsx";

type Props = {
  title: string;
  description: string;
  audioUrl: string;
  audioDescription: string;
};


export function MyArticleTopContainer({title, description, audioUrl, audioDescription}: Props) {
  return (
    <div className={styles.topContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <MyAudio audioDescription={audioDescription} audioUrl={audioUrl} />
      </div>
    </div>
  );
}