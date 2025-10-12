

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuIceCreamCone = (props: IconProps) => {

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
          <Path  d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
          <Path  d="M17 7A5 5 0 0 0 7 7" />
          <Path  d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
        </G>
      </Svg>
    );
  }

