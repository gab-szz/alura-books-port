import { useState } from "react";
import InputPersonalizado from "../Input";
import { livros, type ILivro } from "./dados";

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
    </section>
  );
}

export default Pesquisa;
