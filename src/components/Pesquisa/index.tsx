import { useState } from "react";
import InputPersonalizado from "../Input";
import { livros } from "./dados";
import type { ILivro } from "../../types";

function Pesquisa() {
  const [
    livrosPesquisados,
    setLivrosPesquisados,
  ] = useState<ILivro[]>([]);

  console.log(livrosPesquisados);
  return (
    <section className="text-white text-center py-[85px] h-[270px] w-full">
      <h2 className="text-white text-2xl text-center w-full">
        Já sabe por onde começar?
      </h2>

      <h3 className="text-base font-medium mb-10">
        Encontre seu livro na nossa estante
      </h3>

      <InputPersonalizado
        onBlur={(evento) => {
          const livrosDigitados =
            evento.target.value;

          const resultadoPesquisa = livros.filter(
            (livro) => {
              const nomeLivro =
                livro.nome.toLowerCase();
              return nomeLivro.includes(
                livrosDigitados.toLowerCase()
              );
            }
          );
          setLivrosPesquisados(resultadoPesquisa);
        }}
      />

      <div className="flex justify-center gap-20">
        {livrosPesquisados.map((livro) => (
          <div className="mt-20 flex flex-col items-center justify-center gap-2.5">
            <p className="text-xl">
              {livro.nome}
            </p>
            <img src={livro.src} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pesquisa;
