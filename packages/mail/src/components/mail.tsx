import { defineComponent } from '@music163/tango-boot';
import {
  Body,
  Font,
  FontProps,
  Head,
  Html,
  Preview,
  Tailwind,
  TailwindConfig,
} from '@react-email/components';
import React from 'react';

export interface EmailProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * 邮件标题
   */
  title?: string;
  /**
   * Identify the language of text content on the email
   * @default 'en'
   */
  lang?: string;
  /**
   * Identify the direction of text content on the email
   * @default 'ltr'
   */
  dir?: 'ltr' | 'rtl';
  /**
   * A preview text that will be displayed in the inbox of the recipient.
   */
  preview?: string;
  /**
   * 字体配置
   */
  fontConfig?: FontProps;
  /**
   * tailwindcss configuration
   */
  tailwindConfig?: TailwindConfig;
  /**
   * 背景色
   */
  bg?: string;
}

function MailView({
  lang,
  dir,
  title,
  preview,
  fontConfig,
  tailwindConfig,
  bg,
  style,
  children,
}: EmailProps) {
  return (
    <Html lang={lang} dir={dir}>
      <Preview>{preview}</Preview>
      <Head>
        <title>{title}</title>
        {fontConfig ? <Font {...fontConfig} /> : null}
      </Head>
      <Tailwind config={tailwindConfig}>
        <Body className="TangoMailBody" style={mailBodyStyle({ ...style, bg })}>
          {children}
        </Body>
      </Tailwind>
    </Html>
  );
}

const mailBodyStyle = (style: React.CSSProperties & { bg?: string }) => {
  const { bg, ...rest } = style || {};
  return {
    ...rest,
    backgroundColor: bg,
  };
};

export const Email = defineComponent(MailView, {
  name: 'Email',
  designerConfig: {
    hasWrapper: true,
    draggable: false,
  },
});
