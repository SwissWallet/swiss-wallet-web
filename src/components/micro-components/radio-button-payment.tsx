import { FormPayment } from "../macro-components/deposit-modal";

interface RadioButtonPaymentProps{
    options: FormPayment[];
    selectedFormPayment: FormPayment | null;
    handleOptionPaymentChange: (option: FormPayment) => void;
}

export function RadioButtonPayment({
    options,
    selectedFormPayment,
    handleOptionPaymentChange,
}: RadioButtonPaymentProps){
  
  return (
    <div className="grid grid-cols-3 gap-2 justify-center items-center">
      {options.map((option) => {

        const isSelected =
        selectedFormPayment?.points === option.points ||
        selectedFormPayment?.others_value === option.others_value;
        
        return(
        
            <div 
            onClick={() => handleOptionPaymentChange(option)}
            key={option.points}
            className={`flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer`}
        >

        <div 
            className={`w-full w-min-[150px] px-3 py-2 rounded-md text-center
            ${selectedFormPayment === option ? 'scale-110 bg-red-gradient' : 'border-2 border-gray-500'}`} 
        >
            <span>{option.points || option.others_value}</span>
        </div>
        <label className="cursor-pointer">
            <input
              type="radio"
              value={option.points}
              checked={selectedFormPayment === option}
              onChange={() => handleOptionPaymentChange(option)}
              className="sr-only peer"
              />
            <div className="flex flex-col w-auto">
                <span className={`whitespace-nowrap ml-2 capitalize text-xl ${isSelected ? 'text-gray-500' : "text-white font-bold"}`}>R$ {option.value}</span>
            </div>
          </label>
        </div>
        
      )})}
    </div>
  );
}
