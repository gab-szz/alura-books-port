function HeaderOpcoes() {
  const textoOpcoes = ["Home"];
  return (
    <ul id="header__opcoes" className="flex">
      {textoOpcoes.map((opcao) => (
        <li className="min-w-30 text-xl flex justify-center items-center h-full py-1 pr-15 cursor-pointer ">
          <p>{opcao}</p>
        </li>
      ))}
    </ul>
  );
}

export default HeaderOpcoes;
