import { livros } from "./dados";

function UltimosLancamentos() {
  return (
    <div>
      <h2 className="text-4xl text-center text-white mb-0 pb-0">
        Ultimos Lançamentos
      </h2>
      <div className="flex justify-center gap-20 pb-25">
        {livros.map((livro) => (
          <div className="mt-20 flex flex-col items-center justify-center gap-2.5">
            <p className="text-xl text-white">
              {livro.nome}
            </p>
            <img
              src={livro.src}
              alt={livro.nome}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UltimosLancamentos;
