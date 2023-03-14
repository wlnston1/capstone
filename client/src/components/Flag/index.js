import React from "react";

function Flag({ flag }) {
  return (
    <div>
      {flag ? (
        <div className="mt-4 text-center">
          <img className="mx-auto block w-50"
            src={`https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${flag}.svg`}
            alt="flag"
          />
        </div>
      ) : (
        <p>No user selected</p>
      )}
    </div>
  );
}

export default Flag;
