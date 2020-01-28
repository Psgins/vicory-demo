import React, { FC, Ref, useRef } from 'react';
import { Portal } from '@material-ui/core';

interface PortalWrapperProps {
  forwardRef?: Ref<Element>;
}

const PortalWrapper: FC<any> = props => {
  console.log(props);
  const { forwardRef } = props;
  return forwardRef ? (
    <Portal container={forwardRef}>
      <div>{props.x}</div>
    </Portal>
  ) : null;
};

export default PortalWrapper;
