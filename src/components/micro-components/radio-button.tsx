interface RadioButtoProps{
    options: string[]
    selectedOption: string;
    handleOptionChange: (option: string) => void;
}

export function RadioButton({
    options,
    selectedOption,
    handleOptionChange,
}: RadioButtoProps){
  
  return (
    <div className="flex justify-center items-center gap-10">
      {options.map((option) => (
        <div  className={`
            flex items-center rounded-md py-3 px-5 transition-all duration-300 cursor-pointer
            ${selectedOption === option ? 'scale-110 bg-red-gradient' : 'border-4 border-gray-500'
          }`} 
          onClick={() => handleOptionChange(option)}
          key={option}>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              className="sr-only peer"
            />
            <span className={`ml-2 capitalize text-xl ${selectedOption === option ? 'text-white font-bold' : "text-gray-500"}`}>{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
}
