

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCircleDivide = (props: IconProps) => {

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
          <Circle  cx="12" cy="12" r="10" />
          <Line  x1="8" x2="16" y1="12" y2="12" />
          <Line  x1="12" x2="12" y1="16" y2="16" />
          <Line  x1="12" x2="12" y1="8" y2="8" />
        </G>
      </Svg>
    );
  }

