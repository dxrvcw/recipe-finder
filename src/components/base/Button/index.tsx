interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  text: string;
}

const Button = ({ onClick, disabled, text }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full p-2 bg-blue-500 text-white rounded-md cursor-pointer ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
