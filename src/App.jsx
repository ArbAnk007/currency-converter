import './styles/App.css'
import React, {useState} from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {

  const [amount, setAmmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [selectCurrency, setSelectCurrency] = useState("inr");
  const [convertToCurrency, setConvertToCurrency] = useState("usd")
  const data = useCurrencyInfo(selectCurrency)
  const currencyOptions = Object.keys(data);
  

  return (
    <>
      <InputBox 
        label={"From"}
        amount={amount}
        onAmountChange={ (val) => {setAmmount(val); setConvertedAmount(val*data[convertToCurrency])} }
        onCurrencyChange={ (val) => {setSelectCurrency(val)} }
        currencyOptions={currencyOptions}
        selectCurrency={selectCurrency}
        isAmountDisable={false}
        isCurrencyDisable={false}
      />
      <div id='swap-btn'
        onClick={ () => {setSelectCurrency(convertToCurrency); setConvertToCurrency(selectCurrency); setAmmount(convertedAmount); setConvertedAmount(amount)} }
      >Swap</div>
      <InputBox 
        label={"To"}
        amount={convertedAmount}
        onCurrencyChange={ (val) => {setConvertToCurrency(val)} }
        currencyOptions={currencyOptions}
        selectCurrency={convertToCurrency}
        isAmountDisable={true}
        isCurrencyDisable={false}
      />
    </>
  )
}

export default App
