import tango, { defineStore } from '@music163/tango-boot';
import { Input } from '@music163/antd';

export default {
  title: 'apps/Counter',
};

const counter = defineStore({
  count: 10,
  add() {
    counter.count++;
  },
  minus() {
    counter.count--;
  },
});

export function Counter() {
  return (
    <div>
      <Input tid="input1" defaultValue="hello" />
      <div>{tango.page.input1?.value}</div>
    </div>
  );
}
