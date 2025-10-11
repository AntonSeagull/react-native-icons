

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiBellOff = (props: IconProps) => {

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
          <Line  x1="1" y1="1" x2="23" y2="23" />
          <Path  d="M13.73 21a2 2 0 0 1-3.46 0" />
          <Path  d="M18.63 13A17.89 17.89 0 0 1 18 8" />
          <Path  d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" />
          <Path  d="M18 8a6 6 0 0 0-9.33-5" />
        </G>
      </Svg>
    );
  }

