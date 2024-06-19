import { Tailwind, Button, Badge, Box } from '@music163/tango-mail';

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

export function BadgeDemo() {
  return (
    <Tailwind>
      <Box m="24px 0">
        <Badge>default</Badge>
        <Badge color="blue">blue</Badge>
        <Badge color="gray">gray</Badge>
        <Badge color="red">red</Badge>
        <Badge color="yellow">yellow</Badge>
        <Badge color="green">green</Badge>
        <Badge color="blue">blue</Badge>
        <Badge color="indigo">indigo</Badge>
        <Badge color="purple">purple</Badge>
        <Badge color="pink">pink</Badge>
      </Box>
      <Box m="24px 0">
        <Badge isPill>pill</Badge>
      </Box>
      <Box m="24px 0">
        <Badge showBorder>pill</Badge>
        <Badge showBorder color="red">pill</Badge>
      </Box>
    </Tailwind>
  );
}
