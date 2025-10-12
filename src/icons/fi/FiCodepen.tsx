

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiCodepen = (props: IconProps) => {

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
          <Polyline  points="22 8.5 12 15.5 2 8.5" />
          <Polyline  points="2 15.5 12 8.5 22 15.5" />
          <Line  x1="12" y1="22" x2="12" y2="15.5" />
          <Line  x1="12" y1="2" x2="12" y2="8.5" />
        </G>
      </Svg>
    );
  }

