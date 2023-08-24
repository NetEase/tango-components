import { withDnd } from '@music163/tango-helpers';
import { Layout as BaseLayout } from '../components';

type LayoutComponent = React.ForwardRefExoticComponent<
  any & React.RefAttributes<React.ReactElement>
> & {
  Header: typeof BaseLayout.Header;
  Footer: typeof BaseLayout.Footer;
  Sider: typeof BaseLayout.Sider;
  Content: typeof BaseLayout.Content;
};

export const Layout: LayoutComponent = withDnd({
  name: 'Layout',
  draggable: false,
})(BaseLayout) as any;

Layout.Header = BaseLayout.Header;
Layout.Footer = BaseLayout.Footer;
Layout.Sider = BaseLayout.Sider;
Layout.Content = BaseLayout.Content;
