

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiType = (props: IconProps) => {

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
          <Polyline  points="4 7 4 4 20 4 20 7" />
          <Line  x1="9" y1="20" x2="15" y2="20" />
          <Line  x1="12" y1="4" x2="12" y2="20" />
        </G>
      </Svg>
    );
  }

