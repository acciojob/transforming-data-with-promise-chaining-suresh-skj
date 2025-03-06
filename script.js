//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("ip");
  const button = document.getElementById("btn");
  const outputDiv = document.getElementById("output");

  button.addEventListener("click", () => {
    const inputValue = parseFloat(inputField.value);
    outputDiv.innerHTML = ""; 

    if (isNaN(inputValue)) {
      outputDiv.innerText = "Please enter a valid number.";
      return;
    }

    new Promise((resolve) => {
      setTimeout(() => {
        outputDiv.innerText = `Result: ${inputValue}`;
        resolve(inputValue);
      }, 2000);
    })
      .then((num) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = num * 2;
            outputDiv.innerText = `Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      })
      .then((num) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = num - 3;
            outputDiv.innerText = `Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      })
      .then((num) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = num / 2;
            outputDiv.innerText = `Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      })
      .then((num) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = num + 10;
            outputDiv.innerText = `Final Result: ${result}`;
            resolve(result);
          }, 1000);
        });
      });
  });
});
