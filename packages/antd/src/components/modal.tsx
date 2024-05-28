import React from 'react';
import { css } from 'styled-components';
import { coral } from 'coral-system';
import { Button, Modal as AntModal, ModalProps } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { defineComponent } from '@music163/tango-boot';
import { Placeholder } from './placeholder';
import { ShadowContainer } from './shadow-container';

const BaseModalWrapper = coral(
  'div',
  css`
    position: relative;
    background-color: #fff;
    border: 1px solid var(--music-colors-line-normal);
    box-shadow: var(--music-shadows-lowDown);

    min-width: 600px;

    .ModalPanelHead {
      padding: 12px;
      border-bottom: 1px solid var(--music-colors-line-normal);
      font-size: 16px;
      font-weight: 500;
    }

    .ModalPanelClose {
      position: absolute;
      top: 12px;
      right: 12px;
      color: var(--music-colors-text-secondary);
    }

    .ModalPanelBody {
      padding: 12px;
    }

    .ModalPanelFooter {
      border-top: 1px solid var(--music-colors-line-normal);
      padding: 12px;
      text-align: right;

      > button:not(:last-child) {
        margin-right: 12px;
      }
    }
  `,
);

function ModalDesigner({
  title = '弹窗标题',
  children,
  onOk,
  onCancel,
  footer,
  cancelText = '取消',
  okText = '确认',
  style,
  ...rest
}: ModalProps & { children?: React.ReactNode }) {
  const renderFooter = () => {
    if (footer === null) {
      return null;
    }
    return (
      footer ?? (
        <div className="ModalPanelFooter">
          <Button type="primary" onClick={onOk}>
            {okText}
          </Button>
          <Button onClick={onCancel}>{cancelText}</Button>
        </div>
      )
    );
  };
  return (
    <ShadowContainer
      type="modal"
      label="Modal"
      bg="rgba(0, 0, 0, 0.45)"
      px="100px"
      py="24px"
      {...rest}
    >
      <BaseModalWrapper style={style}>
        <div className="ModalPanelHead">{title}</div>
        <div className="ModalPanelClose">
          <CloseOutlined />
        </div>
        <div className="ModalPanelBody">{children || <Placeholder />}</div>
        {renderFooter()}
      </BaseModalWrapper>
    </ShadowContainer>
  );
}

export const Modal = defineComponent(AntModal, {
  name: 'Modal',
  designerConfig: {
    render({ designerProps, originalProps }) {
      return <ModalDesigner {...designerProps} {...originalProps} />;
    },
  },
});
