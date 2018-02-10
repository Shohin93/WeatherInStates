import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{_average(props.data)} {props.unit}</div>
    </div>
  );
}

function _average(data) {
  return `Average: ${_.round(_.sum(data) / data.length)}`;
}
