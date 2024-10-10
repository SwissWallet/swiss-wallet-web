import { useState } from 'react';

export function RadioButton(){
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: React.FormEvent) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex justify-center items-center gap-10">
      {['debit', 'credit', 'pix'].map((option) => (
        <div key={option}>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="sr-only peer"
            />
            <div className={`w-6 h-6 border-2 border-gray-300 rounded-full peer-checked:border-blue-500 flex items-center justify-center`}>
              {selectedOption === option && (
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              )}
            </div>
            <span className="ml-2 capitalize">{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
}
