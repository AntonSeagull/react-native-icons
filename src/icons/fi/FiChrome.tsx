

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiChrome = (props: IconProps) => {

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
          <Circle  cx="12" cy="12" r="10" />
          <Circle  cx="12" cy="12" r="4" />
          <Line  x1="21.17" y1="8" x2="12" y2="8" />
          <Line  x1="3.95" y1="6.06" x2="8.54" y2="14" />
          <Line  x1="10.88" y1="21.94" x2="15.46" y2="14" />
        </G>
      </Svg>
    );
  }

