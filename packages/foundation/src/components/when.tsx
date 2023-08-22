import React from 'react';

export interface WhenProps {
  /**
   * test
   */
  test?: boolean;
  /**
   * children
   */
  children?: React.ReactNode;
}

// if
export function When({ test, children }: WhenProps) {
  if (test) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return <React.Fragment />;
}

