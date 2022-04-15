import React, { FunctionComponent } from 'react';
import { IFrontItem } from '../../../model/IFrontItem';

type Props = {
  item: IFrontItem;
};

const ViewImage: FunctionComponent<Props> = ({}) => {
  return <div></div>;
};

export default React.memo(ViewImage);
