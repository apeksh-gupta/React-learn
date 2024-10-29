import React, { useId } from 'react'

function InputBox({
  label , 
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false , 

  className= "",
  
}) {
  const amountInputId = useId()
  
  return (
    <div className={`p-3 rounded-lg text-sm flex bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ${className}`}>
      <div className="w-1/2">
          <label htmlFor={amountInputId} 
              className="text-black/40 mb-2 inline-block">
              {label}

          </label>
          <input
              id='amountInputId'
              type="number"
              value={amount}
              disabled={amountDisable}
              onChange={ (e)=>{
                onAmountChange && onAmountChange(e.target.value)
              }}
              className="outline-none w-full bg-transparent py-1.5"
              placeholder="Amount"
          />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e)=> {
              onCurrencyChange && onCurrencyChange(e.target.value)
            }}
            disabled={currencyDisable}
          >
            {currencyOptions.map( (currency) => {
              <option key={currency} value={currency}>
              {currency}
              </option>
            }) }
          </select>
      </div>
    </div>
  )
}

export default InputBox

