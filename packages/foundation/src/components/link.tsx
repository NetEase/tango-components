import { HTMLCoralProps, coral, css } from 'coral-system';

export interface LinkProps extends HTMLCoralProps<'a'> {}

const linkStyle = css`
  background: transparent;
  padding: 0;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  color: var(--music-colors-link-link);
  font-size: var(--music-fontSizes-body);

  &:hover:not([disabled]) {
    color: var(--music-colors-link-hover);
  }

  &[disabled] {
    color: var(--music-colors-link-disabled);
    cursor: not-allowed;
  }
`;

export const Link = coral<'a', LinkProps>('a', linkStyle, {
  prefix: '--music',
});
