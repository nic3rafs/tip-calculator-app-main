import { useState } from "react";
import { iconDollar, iconPerson, logo } from "./assets";
import InputField from "./components/InputField";
import RadioButton from "./components/RadioButton";

function App() {
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState("");
  const [customPercent, setCustomPercent] = useState("");
  const [people, setPeople] = useState("");
  const [billErrorMessage, setBillErrorMessage] = useState(null);
  const [peopleErrorMessage, setPeopleErrorMessage] = useState(null);

  let currentPercent;
  if (!percent && customPercent) {
    console.log('!percent && customPercent');
    currentPercent = customPercent;
  } else if (percent && !customPercent) {
    console.log('percent && !customPercent');
    currentPercent = percent;
  }

  let tip = 0;
  let total = 0;
  let tipAmountPerPerson = 0;

  if (bill && currentPercent && people) {
    tip = (+bill * +currentPercent) / 100;
    total = (+bill + +tip) / +people;
    tipAmountPerPerson = +tip / +people;
  }

  function handleChangeBill(e) {
    if (e.target.value <= 0) {
      setBillErrorMessage("Can't be zero");
      setBill("");
    } else {
      setBillErrorMessage(null);
      setBill(e.target.value);
    }
  }
  function handleChangePeople(e) {
    if (e.target.value <= 0) {
      setPeopleErrorMessage("Can't be zero");
      setPeople("");
    } else {
      setPeopleErrorMessage(null);
      setPeople(+e.target.value);
    }
  }
  function handleChangeReset() {
    setBill("");
    setPercent("");
    setPeople("");
    setCustomPercent("");
    setBillErrorMessage(null);
    setPeopleErrorMessage(null);
  }
  function handleSelectPercent(e) {
    setPercent(e.target.value);
    setCustomPercent("");
  }
  function handleCustomPercentFocus() {
    setPercent(0);
  }
  function handleCustomPercentChange(e) {
    setCustomPercent(e.target.value);
    setPercent("")
  }

  return (
    <div className="font-bold bg-light-grayish-cyan h-screen flex flex-col items-center  sm:justify-center">
      <img
        src={logo}
        className=" p-12 sm:absolute sm:top-0 sm:z-0 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12"
        alt="logo image"
      />
      <form
        className="bg-white h-full w-full rounded-t-3xl p-8 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 sm:grid 
      sm:grid-cols-2 sm:h-min sm:rounded-3xl sm:gap-8 sm:z-10 sm:mt-12"
      >
        <div className="mb-8 sm:p-4 sm:mb-0">
          <InputField
            labelText="Bill"
            id="bill"
            icon={iconDollar}
            onChange={handleChangeBill}
            errorMessage={billErrorMessage}
            alt="Dollar icon"
            value={bill}
          />

          {/* PERCENT SELECTION */}
          <fieldset className="mt-7">
            <legend className="block text-md text-dark-grayish-cyan">
              Select Tip %
            </legend>
            <div className="grid grid-cols-2 gap-4  pt-2 pb-8 sm:grid-cols-3 sm:gap-3">
              {[5, 10, 15, 25, 50].map((value) => (
                <RadioButton
                  value={value}
                  key={value}
                  onChange={handleSelectPercent}
                  percent={percent}
                />
              ))}
              <div>
                <input
                  type="number"
                  id="0"
                  name="percent"
                  key="custom"
                  placeholder="Custom"
                  className="block  rounded-md bg-very-light-grayish-cyan  p-2 px-6 
                  focus:outline-strong-cyan text-2xl text-right 
                  text-very-dark-cyan placeholder-dark-grayish-cyan
                  sm:text-xl sm:pl-2 sm:pr-6 h-full w-full"
                  onFocus={handleCustomPercentFocus}
                  onChange={handleCustomPercentChange}
                  value={customPercent}
                ></input>
              </div>
            </div>
          </fieldset>

          <InputField
            labelText="Number of people"
            id="people"
            icon={iconPerson}
            onChange={handleChangePeople}
            errorMessage={peopleErrorMessage}
            alt="Person icon"
            value={people}
          />
        </div>

        <div className="bg-very-dark-cyan rounded-xl p-6 pt-8 flex flex-col gap-6 sm:p-8 ">
          <div className="flex justify-between">
            <div>
              <p className="text-white">Tip Amount</p>
              <p className="text-grayish-cyan text-sm">/ person</p>
            </div>
            <p className="text-4xl text-strong-cyan xl:text-5xl">
              $
              {tipAmountPerPerson
                ? Math.round(tipAmountPerPerson * 100) / 100
                : "0.00"}
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-white">Total</p>
              <p className="text-grayish-cyan text-sm">/ person</p>
            </div>
            <p className="text-4xl text-strong-cyan xl:text-5xl">
              ${total ? Math.round(total * 100) / 100 : "0.00"}
            </p>
          </div>
          <button
            type="reset"
            className="block w-full py-2 rounded-md
           bg-strong-cyan text-very-dark-cyan text-2xl mt-2
           sm:mt-auto disabled:bg-dark-grayish-cyan"
            onClick={handleChangeReset}
            disabled={!bill && !percent && !people && !customPercent}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
