export function returnObjectsOnlyWith(dict: any, property: any) {
  if (!dict) return;
  let playersComp = Object.keys(dict).reduce((result: any, key: string) => {
    result[key] = dict[key][property];
    return result;
  }, {});

  return playersComp;
}
