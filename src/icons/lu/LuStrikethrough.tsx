

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuStrikethrough = (props: IconProps) => {

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
          <Path  d="M16 4H9a3 3 0 0 0-2.83 4" />
          <Path  d="M14 12a4 4 0 0 1 0 8H6" />
        </G>
      </Svg>
    );
  }

