// Creating a New Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  const success = true; // Change this to false to simulate rejection

  if (success) {
    resolve("Promise fulfilled successfully!");
    // -(like the operation completed successfully)
  } else {
    reject("Promise rejected with an error.");
    // -(like the operation failed)
  }
});

// Handling a Fulfilled Promise
myPromise
  .then((value) => {
    console.log(value);
    // - Runs if the promise is fulfilled
    // - Logs: "Promise fulfilled successfully!"
  })

  // Handling a Rejected Promise
  .catch((error) => {
    console.error(error);
    // - Runs if the promise is rejected
    // - Logs: "Promise rejected with an error."
  })

  // Finally Block (Always Runs)
  .finally(() => {
    console.log("Promise completed.");
    // - Runs regardless of fulfillment or rejection
    // - Useful for cleanup operations
  });
