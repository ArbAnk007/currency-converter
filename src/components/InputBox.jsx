import { useId } from "react";
import "../styles/InputBox.css"

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="inr",
    isAmountDisable=false,
    isCurrencyDisable=false,
}){
    const amountInputId = useId();
    return (
        <div className="parent-container">
            <div className="amount-container">
                <label htmlFor={amountInputId}>{label}</label>
                <input 
                type="number" id={amountInputId} min={0}
                value={amount} placeholder="Amount"
                disabled={isAmountDisable}
                onChange={ (e) => onAmountChange && onAmountChange(Number(e.target.value)) } />
            </div>
            <div className="currency-container">
              <label>Currency</label>
              <select value={selectCurrency}
                disabled={isCurrencyDisable}
                onChange={ (e) => {onCurrencyChange && onCurrencyChange(e.target.value)} }
              >
                {(currencyOptions.map( (currency) => <option key={currency} >{currency}</option> ))}
              </select>
            </div>
        </div>
    )
}

export default InputBox;