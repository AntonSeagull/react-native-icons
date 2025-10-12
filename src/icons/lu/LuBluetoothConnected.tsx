

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBluetoothConnected = (props: IconProps) => {

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
          <Line  x1="18" x2="21" y1="12" y2="12" />
          <Line  x1="3" x2="6" y1="12" y2="12" />
          <Path  d="m7 7 10 10-5 5V2l5 5L7 17" />
        </G>
      </Svg>
    );
  }

