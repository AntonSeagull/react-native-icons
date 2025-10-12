

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiMaximize2 = (props: IconProps) => {

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
          <Polyline  points="15 3 21 3 21 9" />
          <Polyline  points="9 21 3 21 3 15" />
          <Line  x1="21" y1="3" x2="14" y2="10" />
          <Line  x1="3" y1="21" x2="10" y2="14" />
        </G>
      </Svg>
    );
  }

