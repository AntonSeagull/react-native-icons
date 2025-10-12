

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBasketPause = (props: IconProps) => {

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
          <Path  d="M17 10l-2 -6" />
          <Path  d="M7 10l2 -6" />
          <Path  d="M13 20h-5.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.478 2.725" />
          <Path  d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M17 17v5" />
          <Path  d="M21 17v5" />
        </G>
      </Svg>
    );
  }

