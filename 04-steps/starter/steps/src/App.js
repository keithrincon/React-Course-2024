// start by deleting everything thats prebuilt on this file
// then built App component cause its the root comp. of our app
// the parent of the rest of the comp.
// then export it so indexedDB.js can import it

import { useState } from 'react';

//now lets write the jsx start with a div

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}
function Steps() {
  // this step will be what we want to update later
  // for now building static part - manullay setting it to one
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // event handlers function using in the component - button
  function handlePrevious() {
    // 3rd step: updating setState variable
    if (step > 1) setStep((s) => s - 1);
    // must use a callback function
    //(s) - recieves current value of state
    // (s) is called the arguement. short for step
    // or currentStep
    //

    // if step is greater than 1 only then do this.
    // bug: continues going past list numbers
    // solution is to add a condition
  }
  function handleNext() {
    // 3rd step: updating setState variable
    if (step < 3) {
      setStep((s) => s + 1);
      // always use a callback to update state
      // based on current value  of that state
      // setStep((s) => s + 1);
    }
    // bug: continues going past list numbers
  }

  return (
    <>
      <button className='close' onClick={() => setIsOpen((is) => !is)}>
        {/* here we day: call it is and then toggle that */}
        {/* using the not operator - its dynamic instead of using false  */}
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            {/* set contitionally to set the active class */}
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          {/* inserting messages dynamically by defining a var thatll tell us which step were in */}

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className='buttons'>
            {/* adding styles to indivual jsx elements */}
            {/* handling events using onClick prop - directly on the element */}
            <Button bgColor='#7950f2' textColor='fff' onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor='#7950f2' textColor='fff' onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
    // a fragment - itll disapper the div from the DOM
    // when you need a piece of JSX to return 2 elements then the fragment is great for that.
  );
}

function StepMessage({ step, children }) {
  return (
    <div className='message'>
      <h3> Step {step} </h3>
      {children}
    </div>
    // we want it to always display the step and whatever content that we get.
    // so first we need to receive 2 props
    // 1 step then children prop
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  // with will return a button element which should also have the style and onclick event handler
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
