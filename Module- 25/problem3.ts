export {};

function calculateWeeklyTotal(expenses: number[]): number {
  return expenses.reduce((total, current) => total + current, 0);
}

// আউটপুট চেক করার জন্য:
console.log(calculateWeeklyTotal([200, 450, 100])); // 750
console.log(calculateWeeklyTotal([]));              // 0