

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLassoPolygon = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M4.028 13.252l-1.028 -3.252l2 -7l7 5l8 -3l1 9l-9 3l-5.144 -1.255" />
          <Path d="M5 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M5 17c0 1.42 .316 2.805 1 4" />
        </G>
      </Svg>
    );
  }

