import React, { useId } from 'react'

//  useId is a React Hook that generates a unique and stable ID for a component.
// It is mainly used to connect form elements, such as linking a <label> with an <input>.

function InputBox({
    label,
    amount,
    onAmtChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amtDisable = false,
    currencyDisable = false,

    className = "",
}) {
    const amtInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amtInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input

                    id={amtInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amtDisable}
                    value={amount}
                    onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value) //e.target.value convert val in string 
                    )}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {/* When you render a list using .map(), React needs a way to identify each item uniquely.
                  The key helps React know */}'

                    {currencyOption.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox
