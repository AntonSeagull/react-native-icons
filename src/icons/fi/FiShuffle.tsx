

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiShuffle = (props: IconProps) => {

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
          <Polyline  points="16 3 21 3 21 8" />
          <Polyline  points="21 16 21 21 16 21" />
          <Line  x1="4" y1="20" x2="21" y2="3" />
          <Line  x1="15" y1="15" x2="21" y2="21" />
          <Line  x1="4" y1="4" x2="9" y2="9" />
        </G>
      </Svg>
    );
  }

