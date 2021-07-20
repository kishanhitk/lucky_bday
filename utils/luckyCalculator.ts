//checks if birthday is divisivle by a number
export const checkIfBdayIsLucky = (
  date: Date,
  luckyNumber: number
): boolean => {
  let sum = 0;
  const dateArray = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  dateArray.map((element: number) => {
    while (element > 0) {
      sum += element % 10;
      element = Math.floor(element / 10);
    }
  });
  return sum % luckyNumber === 0;
};
