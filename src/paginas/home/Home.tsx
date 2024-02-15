interface homeProps {
  title: string;
  texto: string;
}

export function Home(props: homeProps) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.texto}</p>
    </>
  );
}
