import React, { useState } from 'react';
const InputField = ({
  id,
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined', //default
  size = 'md', //default
  type = 'text',
  isDarkMode = false,
  className = '',
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  //toggle password visibility, initially it is false
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //cross button at right middle of the input field
  const handleClear = () => {
    if (onChange) {
      onChange({ target: { value: '' } });//just make the value inside the input field to empty string
    }
  };

  // Base classes for the input container
  const containerClasses = `flex flex-col font-sans ${isDarkMode ? 'text-white' : 'text-gray-900'}`;

  // Base classes for the input
  const baseInputClasses = `
    w-full block transition-all duration-200 ease-in-out
    rounded-lg border-2 font-sans
    focus:outline-none focus:ring-2
  `;

  // Variant classes
  const variantClasses = {
    outlined: `
      ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
      ${invalid ? 'border-red-500' : (isDarkMode ? 'border-gray-700' : 'border-gray-300')}
      ${disabled ? (isDarkMode ? 'text-gray-500' : 'text-gray-400') : (isDarkMode ? 'text-white' : 'text-gray-800')}
      ${!disabled && 'focus:ring-blue-500'}
      ${!disabled && !isDarkMode && 'focus:border-blue-500'}
      ${!disabled && isDarkMode && 'focus:border-blue-300'}
    `,
    filled: `
      ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} border-transparent
      ${invalid ? 'text-red-500' : (isDarkMode ? 'text-white' : 'text-gray-800')}
      ${disabled ? (isDarkMode ? 'bg-gray-600 text-gray-500' : 'bg-gray-200 text-gray-400') : ''}
      ${!disabled && 'focus:border-blue-300 focus:ring-blue-500'}
    `,
    ghost: `
      bg-transparent border-transparent
      ${invalid ? 'text-red-500' : (isDarkMode ? 'text-white' : 'text-gray-800')}
      ${disabled ? (isDarkMode ? 'text-gray-500' : 'text-gray-400') : ''}
      ${!disabled && 'focus:bg-gray-100 focus:border-gray-200 focus:ring-transparent'}
    `,
  };

  // Size classes
  const sizeClasses = {
    sm: 'p-2 text-sm',
    md: 'p-3 text-base',
    lg: 'p-4 text-lg',
  };

  const finalInputClasses = `${baseInputClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Helper and error text classes
  const textClasses = `text-sm mt-1 font-sans ${invalid ? 'text-red-500' : (isDarkMode ? 'text-gray-400' : 'text-gray-500')}`;

  const showClearButton = value && !disabled && !invalid;
  const isPasswordType = type === 'password';
  const inputType = isPasswordType && showPassword ? 'text' : type;

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={id} className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={inputType}
          disabled={disabled}
          className={`${finalInputClasses} pr-10`}
          {...rest}
        />
        {(isPasswordType || showClearButton) && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            {isPasswordType && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={`
                  p-1 rounded-full transition-colors duration-150
                  ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}
                  ${disabled ? 'cursor-not-allowed opacity-50' : ''}
                `}
                disabled={disabled}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0112 5.25c4.76 0 9.284 1.258 13.315 3.023A8.204 8.204 0 0012 21.75c-4.76 0-9.284-1.258-13.315-3.023A8.204 8.204 0 0012 18.75c4.76 0 9.284-1.258 13.315-3.023A8.204 8.204 0 0012 12c-4.76 0-9.284-1.258-13.315-3.023z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.575 3.01 9.963 7.182a1.012 1.012 0 010 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.575-3.01-9.963-7.182z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            )}
            {showClearButton && (
              <button
                type="button"
                onClick={handleClear}
                className={`
                  p-1 rounded-full transition-colors duration-150 ml-1
                  ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}
                `}
                aria-label="Clear input"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
      {invalid && errorMessage ? (
        <span className={textClasses}>{errorMessage}</span>
      ) : (
        helperText && <span className={textClasses}>{helperText}</span>
      )}
    </div>
  );
};

export default InputField;
