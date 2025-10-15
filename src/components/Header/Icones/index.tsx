import perfil from "../../../imagens/perfil.svg";
import sacola from "../../../imagens/sacola.svg";

function HeaderIcones() {
  const icones = [perfil, sacola];
  return (
    <ul className="flex gap-6">
      {icones.map((icone) => (
        <img src={icone}></img>
      ))}
    </ul>
  );
}

export default HeaderIcones;
