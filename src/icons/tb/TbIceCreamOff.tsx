

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIceCreamOff = (props: IconProps) => {

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
          <Path  d="M12 21.5v-4.5" />
          <Path  d="M8 8v9h8v-1m0 -4v-5a4 4 0 0 0 -7.277 -2.294" />
          <Path  d="M8 10.5l1.74 -.76m2.79 -1.222l3.47 -1.518" />
          <Path  d="M8 14.5l4.488 -1.964" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

