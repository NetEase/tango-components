import { Tailwind, Button } from '@music163/tango-mail';

export default {
  title: 'email/Tailwind',
};

export function Basic() {
  return (
    <Tailwind>
      <div className="bg-white">hello world</div>
      <Button className="px-3 py-2 mt-8 text-sm text-gray-200 bg-blue-600 rounded-md">
        Testing button
      </Button>
    </Tailwind>
  );
}
