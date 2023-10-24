import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type, value, onChange }) => {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.previousElementSibling?.classList.add('label-outlined');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      e.currentTarget.previousElementSibling?.classList.remove('label-outlined');
    }
  };

  const handleRequired = (id: string) => {
    if (id === 'discord-id' || id === 'github-id') {
      return false;
    }
    return true;
  };

  return (
    <div className="mb-4 relative hover:border-black">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`block w-full border border-gray-300 rounded bg-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          handleRequired(id) ? 'required' : ''
        }`}
        required={handleRequired(id)} 
      />
      <label className="absolute top-0 left-3 -mt-3 font-regular px-1 bg-white hover:border-black text-gray-500 text-sm transition-all pointer-events-none">
        {label}
      </label>
    </div>
  );
};

export default InputField;
