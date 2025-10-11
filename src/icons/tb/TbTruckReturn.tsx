

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTruckReturn = (props: IconProps) => {

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
          <Path  d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" />
          <Path  d="M9 17l6 0" />
          <Path  d="M13 6h5l3 5v6h-2" />
        </G>
      </Svg>
    );
  }

