

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCake = (props: IconProps) => {

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
          <Path  d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <Path  d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
          <Path  d="M2 21h20" />
          <Path  d="M7 8v3" />
          <Path  d="M12 8v3" />
          <Path  d="M17 8v3" />
          <Path  d="M7 4h.01" />
          <Path  d="M12 4h.01" />
          <Path  d="M17 4h.01" />
        </G>
      </Svg>
    );
  }

