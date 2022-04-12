import React, { FunctionComponent } from 'react';

type Props = {};

const ViewItem: FunctionComponent<Props> = ({}) => {
  return <div>Page with one item on screen, full page</div>;
};

export default React.memo(ViewItem);
