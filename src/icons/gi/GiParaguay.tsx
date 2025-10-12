

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiParaguay = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M30.6 191.3L74.85 34.64C143.1 9.374 223.8 16.21 284.1 36.89l3 143.21 114 11.2 25.5 100.5 54.8-5.2-27 154.5-81.8 56.2-125.2-18 57.7-110.2C192.5 316.9 84.23 263.2 30.6 191.3z" />
        </G>
      </Svg>
    );
  }

