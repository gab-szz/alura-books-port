import livro from "../../imagens/livro.png";

export type ILivro = {
  nome: string;
  id: number;
  src: string;
};

export const livros: ILivro[] = [
  {
    nome: "Liderança em Design",
    id: 1,
    src: livro,
  },
  {
    nome: "JavaScript Assertivo",
    id: 2,
    src: livro,
  },
  {
    nome: "Cangaceiro em JavaScript",
    id: 3,
    src: livro,
  },
  {
    nome: "Aventureiros do Java",
    id: 4,
    src: livro,
  },
];
