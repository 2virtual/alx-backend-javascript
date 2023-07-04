export default function cleanSet(set, startString) {
  //This function returns a string of all the set values that start with a specific string
  if (
    !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
  ) {
    return '';
  }

  const parts = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
