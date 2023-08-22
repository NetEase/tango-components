export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

export function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}

export function isDeepEquals(obj1: any, obj2: any): boolean {
  // 如果两个对象指向同一个引用，则它们相等
  if (obj1 === obj2) {
    return true;
  }

  // 如果其中一个对象为null或不是对象类型，则它们不相等
  if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') {
    return false;
  }

  // 比较对象的属性
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !isDeepEquals(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
