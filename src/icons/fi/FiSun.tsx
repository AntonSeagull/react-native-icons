

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiSun = (props: IconProps) => {

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
          <Circle  cx="12" cy="12" r="5" />
          <Line  x1="12" y1="1" x2="12" y2="3" />
          <Line  x1="12" y1="21" x2="12" y2="23" />
          <Line  x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <Line  x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <Line  x1="1" y1="12" x2="3" y2="12" />
          <Line  x1="21" y1="12" x2="23" y2="12" />
          <Line  x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <Line  x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </G>
      </Svg>
    );
  }

