

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSunSnow = (props: IconProps) => {

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
          <Path  d="M10 21v-1" />
          <Path  d="M10 4V3" />
          <Path  d="M10 9a3 3 0 0 0 0 6" />
          <Path  d="m14 20 1.25-2.5L18 18" />
          <Path  d="m14 4 1.25 2.5L18 6" />
          <Path  d="m17 21-3-6 1.5-3H22" />
          <Path  d="m17 3-3 6 1.5 3" />
          <Path  d="M2 12h1" />
          <Path  d="m20 10-1.5 2 1.5 2" />
          <Path  d="m3.64 18.36.7-.7" />
          <Path  d="m4.34 6.34-.7-.7" />
        </G>
      </Svg>
    );
  }

