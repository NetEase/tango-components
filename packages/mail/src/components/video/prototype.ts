import { IComponentPrototype } from '@music163/tango-helpers';
import { STYLE_PROPS } from '../../helpers';

export const Video: IComponentPrototype = {
  name: 'Video',
  title: '视频',
  package: '@music163/tango-mail',
  icon: 'icon-video',
  type: 'element',
  props: [
    {
      name: 'src',
      title: '视频地址',
      setter: 'codeSetter',
    },
    {
      name: 'mediaType',
      title: '视频类型',
      setter: 'choiceSetter',
      options: [
        { label: 'MP4', value: 'video/mp4' },
        { label: 'WebM', value: 'video/webm' },
        { label: 'Ogg', value: 'video/ogg' },
      ],
      defaultValue: 'video/mp4',
    },
    {
      name: 'autoPlay',
      title: '是否自动播放',
      setter: 'boolSetter',
    },
    {
      name: 'muted',
      title: '是否静音',
      setter: 'boolSetter',
    },
    {
      name: 'fallback',
      title: '兼容性提示文案',
      setter: 'textSetter',
    },
    {
      name: 'width',
      title: '宽度',
      setter: 'textSetter',
    },
    {
      name: 'height',
      title: '高度',
      setter: 'textSetter',
    },
    ...STYLE_PROPS,
  ],
};
