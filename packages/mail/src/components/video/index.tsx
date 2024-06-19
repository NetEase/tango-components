import { defineComponent } from '@music163/tango-boot';
import React from 'react';
import cx from 'classnames';

export interface VideoProps extends React.ComponentPropsWithoutRef<'video'> {
  /**
   * 兼容性提示文案
   */
  fallback?: string;
  /**
   * 媒体类型
   */
  mediaType?: 'video/mp4' | 'video/webm' | 'video/ogg';
}

function VideoView({
  src,
  mediaType = 'video/mp4',
  fallback = 'Your browser does not support the video tag.',
  children,
  className,
  ...props
}: VideoProps) {
  return (
    <video className={cx('w-full', className)} controls {...props}>
      <source src={src} type={mediaType} />
      {fallback}
    </video>
  );
}

export const Video = defineComponent(VideoView, {
  name: 'Video',
  designerConfig: {},
});
