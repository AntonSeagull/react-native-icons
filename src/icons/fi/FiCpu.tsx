

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiCpu = (props: IconProps) => {

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
          <Line  x1="9" y1="1" x2="9" y2="4" />
          <Line  x1="15" y1="1" x2="15" y2="4" />
          <Line  x1="9" y1="20" x2="9" y2="23" />
          <Line  x1="15" y1="20" x2="15" y2="23" />
          <Line  x1="20" y1="9" x2="23" y2="9" />
          <Line  x1="20" y1="14" x2="23" y2="14" />
          <Line  x1="1" y1="9" x2="4" y2="9" />
          <Line  x1="1" y1="14" x2="4" y2="14" />
        </G>
      </Svg>
    );
  }

