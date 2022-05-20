export interface ClassObject {
  [key: string]: boolean | any;
}

export interface ClassArray extends Array<Class> {}

export type Class = string | number | ClassObject | ClassArray;

export function cc(names: Class): string {
  if (typeof names === 'string' || typeof names === 'number') return '' + names;

  let out = '';

  if (Array.isArray(names)) {
    for (let i = 0, tmp; i < names.length; i++) {
      if ((tmp = cc(names[i])) !== '') {
        out += (out && ' ') + tmp;
      }
    }
  } else {
    for (let k in names) {
      if (names[k]) out += (out && ' ') + k;
    }
  }

  return out;
}
