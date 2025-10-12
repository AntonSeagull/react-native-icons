

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSquareSplitVertical = (props: IconProps) => {

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
          <Line  x1="4" x2="20" y1="12" y2="12" />
          <Path  d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" />
          <Path  d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" />
        </G>
      </Svg>
    );
  }

