

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiMove = (props: IconProps) => {

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
          <Polyline  points="5 9 2 12 5 15" />
          <Polyline  points="9 5 12 2 15 5" />
          <Polyline  points="15 19 12 22 9 19" />
          <Polyline  points="19 9 22 12 19 15" />
          <Line  x1="2" y1="12" x2="22" y2="12" />
          <Line  x1="12" y1="2" x2="12" y2="22" />
        </G>
      </Svg>
    );
  }

