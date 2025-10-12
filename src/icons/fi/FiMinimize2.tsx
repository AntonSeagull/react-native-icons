

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiMinimize2 = (props: IconProps) => {

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
          <Polyline  points="4 14 10 14 10 20" />
          <Polyline  points="20 10 14 10 14 4" />
          <Line  x1="14" y1="10" x2="21" y2="3" />
          <Line  x1="3" y1="21" x2="10" y2="14" />
        </G>
      </Svg>
    );
  }

