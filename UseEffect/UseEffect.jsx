const { useEffect } = require("react");

// Empty Dependency Array
useEffect(() => {
  // Runs only once after initial mount
  // -(like componentDidMount).
}, []);

// Dependency Array with Specific Values
useEffect(() => {
  // Runs when any of the dependencies
  // - (value1, value2, value3) change.
}, [value1, value2, value3]);

// No Dependency Array (Incorrect Implementation)
useEffect(() => {
  // Runs on every render. Can cause performance issues
  // - or infinite loops.
  // Avoid unless necessary.
});
