import { forEach } from "../../webpack.config";

export function returnObjectsOnlyWith<TObj>(
  dict: { [key: string]: TObj },
  ...property: (keyof TObj)[]
) {
  if (!dict) return;
  let playersComp = Object.keys(dict).reduce((result: any, key: string) => {
    let newObj: any = {};
    property.forEach((p) => {
      newObj[p] = dict[key][p];
    });

    result[key] = newObj;
    return result;
  }, {});

  return playersComp;
}
export function changeTemporarily<T, K extends keyof T>(
  obj: T,
  property: K,
  change: T[K],
  duration: number
) {
  const originalProperty = obj[property];
  obj[property] = change;

  setTimeout(() => {
    obj[property] = originalProperty;
  }, duration);
}
