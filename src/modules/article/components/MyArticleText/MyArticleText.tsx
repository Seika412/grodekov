type Props = {
  text: string,
};

export function MyArticleText({text}: Props) {
  return (
    <p>
      {text}
    </p>
  );
};