

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuKeyboardOff = (props: IconProps) => {

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
          <Path  d="M 20 4 A2 2 0 0 1 22 6" />
          <Path  d="M 22 6 L 22 16.41" />
          <Path  d="M 7 16 L 16 16" />
          <Path  d="M 9.69 4 L 20 4" />
          <Path  d="M14 8h.01" />
          <Path  d="M18 8h.01" />
          <Path  d="m2 2 20 20" />
          <Path  d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
          <Path  d="M6 8h.01" />
          <Path  d="M8 12h.01" />
        </G>
      </Svg>
    );
  }

