

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuZoomOut = (props: IconProps) => {

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
          <Circle  cx="11" cy="11" r="8" />
          <Line  x1="21" x2="16.65" y1="21" y2="16.65" />
          <Line  x1="8" x2="14" y1="11" y2="11" />
        </G>
      </Svg>
    );
  }

