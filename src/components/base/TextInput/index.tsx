interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: 'text' | 'number';
}

const TextInput = ({ label, value, onChange, placeholder, type }: TextInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
    </div>
  );
};

export default TextInput;
