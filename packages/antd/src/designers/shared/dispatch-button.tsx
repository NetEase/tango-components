import React from 'react';
import { Button, ButtonProps } from '../../components';
import {
  TangoEventName,
  dispatchTangoEvent,
  ComponentPrototypeType,
} from '@music163/tango-helpers';

export interface DispatchButtonProps extends ButtonProps {
  payload?: {
    type: 'insertChild' | 'replaceNode' | 'selectNode' | 'openSmartWizard';
    targetId?: string;
    sourceName?: string | ComponentPrototypeType;
  };
}

export function DispatchButton({ payload, children, ...rest }: DispatchButtonProps) {
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        dispatchTangoEvent(e.target, TangoEventName.DesignerAction, payload);
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
