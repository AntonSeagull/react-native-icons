

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiLoader = (props: IconProps) => {

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
          <Line  x1="12" y1="2" x2="12" y2="6" />
          <Line  x1="12" y1="18" x2="12" y2="22" />
          <Line  x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
          <Line  x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
          <Line  x1="2" y1="12" x2="6" y2="12" />
          <Line  x1="18" y1="12" x2="22" y2="12" />
          <Line  x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
          <Line  x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
        </G>
      </Svg>
    );
  }

