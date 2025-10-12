

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiBarChart = (props: IconProps) => {

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
          <Line  x1="12" y1="20" x2="12" y2="10" />
          <Line  x1="18" y1="20" x2="18" y2="4" />
          <Line  x1="6" y1="20" x2="6" y2="16" />
        </G>
      </Svg>
    );
  }

