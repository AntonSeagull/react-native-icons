

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTagOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M7.149 7.144a.498 .498 0 0 0 .351 .856a.498 .498 0 0 0 .341 -.135" />
          <Path  d="M3.883 3.875a2.99 2.99 0 0 0 -.883 2.125v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l2.796 -2.796m2.005 -2.005l.79 -.79a2.41 2.41 0 0 0 0 -3.41l-7.71 -7.71a2 2 0 0 0 -1.412 -.585h-4.173" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

