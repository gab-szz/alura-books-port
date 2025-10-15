import logo from "../../imagens/logo.svg";

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={logo} alt="logo" className="w-12 h-auto" />
      <p className="text-3xl">
        <strong>Alura</strong>Books
      </p>
    </div>
  );
};
