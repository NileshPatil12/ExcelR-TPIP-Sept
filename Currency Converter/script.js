let apiKey = "c19df612aa565e4aeefab41c";

let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

// Create dropdown from the currencies array
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency.code;
  option.text = currency.country;
  fromDropDown.add(option);
});

// Repeat the same for the other dropdown
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency.code;
  option.text = currency.country;
  toDropDown.add(option);
});

// Setting default values
fromDropDown.value = "USD";
toDropDown.value = "INR";

// Function to handle currency conversion and POST request
let convertCurrency = () => {
  // Get the values from the input and selected currencies
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  // If amount input field is not empty
  if (amount.length != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;

        // Display result
        result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;

        // Prepare data for POST request
        const conversionData = {
          amount: parseFloat(amount),
          fromCurrency,
          toCurrency,
          convertedAmount: parseFloat(convertedAmount.toFixed(2)),
        };

        // Log POST data in the console
        console.log("POST Request Data:", conversionData);

        // Send the POST request to log the conversion
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(conversionData),
        })
          .then((response) => {
            if (response.ok) {
              console.log("POST Request Successful:", response);
            } else {
              console.error("POST Request Failed:", response.statusText);
            }
          })
          .catch((error) => {
            console.error("Error in POST Request:", error);
          });
      });
  } else {
    alert("Please fill in the amount");
  }
};

// Add event listener for the Convert button
document.querySelector("#convert-button").addEventListener("click", convertCurrency);

// Add event listener for the amount input field (to trigger conversion on input)
document.querySelector("#amount").addEventListener("input", (e) => {
  if (e.target.value) {
    convertCurrency();
  }
});

// Initial conversion when the page loads
window.addEventListener("load", convertCurrency);
