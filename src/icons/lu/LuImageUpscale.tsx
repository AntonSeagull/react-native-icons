

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuImageUpscale = (props: IconProps) => {

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
          <Path  d="M16 3h5v5" />
          <Path  d="M17 21h2a2 2 0 0 0 2-2" />
          <Path  d="M21 12v3" />
          <Path  d="m21 3-5 5" />
          <Path  d="M3 7V5a2 2 0 0 1 2-2" />
          <Path  d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" />
          <Path  d="M9 3h3" />
        </G>
      </Svg>
    );
  }

