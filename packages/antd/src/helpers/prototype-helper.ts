import { ComponentPrototypeType } from '@music163/tango-helpers';

export function omitProps(props: ComponentPrototypeType['props'], omitList: string[]) {
  return props?.filter((prop) => !omitList.includes(prop.name));
}

export function pickProps(props: ComponentPrototypeType['props'], pickList: string[]) {
  return props?.filter((prop) => pickList.includes(prop.name));
}
