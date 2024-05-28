import { Modal } from '@music163/antd';

export default {
  title: 'antd/Modal',
  tags: ['autodocs'],
};

export const Basic = () => {
  return (
    <div>
      <div>hello</div>
      <Modal title="A simple modal">
        <div>content</div>
      </Modal>
    </div>
  );
};
