interface RadioButtonProps {
  options: string[];
  selectedOption: string;
  handleOptionChange: (option: string) => void;
}

export function RadioButton({
  options,
  selectedOption,
  handleOptionChange,
}: RadioButtonProps) {
  return (
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10">
          {options.map((option) => (
              <div
                  className={`
                      flex items-center rounded-md py-3 px-5 transition-all duration-300 cursor-pointer
                      ${selectedOption === option ? 'scale-110 bg-red-gradient' : 'border-4 border-gray-500'}
                      sm:px-6 sm:py-4 md:px-8 md:py-5
                  `}
                  onClick={() => handleOptionChange(option)}
                  key={option}
              >
                  <label className="relative inline-flex items-center cursor-pointer">
                      <input
                          type="radio"
                          value={option}
                          checked={selectedOption === option}
                          onChange={() => handleOptionChange(option)}
                          className="sr-only peer"
                      />
                      <span
                          className={`
                              capitalize text-xl text-center
                              ${selectedOption === option ? 'text-white font-bold' : "text-gray-500"}
                              sm:text-2xl md:text-3xl
                          `}
                      >
                          {option}
                      </span>
                  </label>
              </div>
          ))}
      </div>
  );
}
