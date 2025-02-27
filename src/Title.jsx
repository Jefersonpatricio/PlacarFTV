export default function Title({ locked, text }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>Deseja fazer uma doação para o projeto?</span>
      ) : (
        <span>{text}</span>
      )}
    </h1>
  );
}
