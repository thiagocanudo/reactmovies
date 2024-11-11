export function Banner({ titulo, descricao, categoria }) {
  const background =
    categoria == 'filmes'
      ? 'bg-filmes'
      : categoria == 'series'
      ? 'bg-series'
      : 'bg-red-500';

  return (
    <div
      className={`${background} bg-center bg-cover pt-56 pb-32 px-12 text-center`}
    >
      <h3>{titulo}</h3>
      <p className="text-brand-yellow">{descricao}</p>
    </div>
  );
}
