export const filter = async<T>(arrayArg: T[], filterFunction: (itemArg: T) => Promise<boolean>): Promise<T[]> => {
  const returnArray: T[] = [];
  for (const itemArg of arrayArg) {
    const filterResult = await filterFunction(itemArg);
    if (filterResult) {
      returnArray.push(itemArg);
    }
  }
  return returnArray;
}