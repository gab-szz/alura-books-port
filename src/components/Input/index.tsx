import type { InputHTMLAttributes } from "react";

function InputPersonalizado(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      type="text"
      placeholder="Digite aqui..."
      style={{ color: "#FFFFFF" }}
      className="border border-white bg-transparent rounded-[50px] w-[300px] py-3 px-5"
      {...props}
    />
  );
}

export default InputPersonalizado;
