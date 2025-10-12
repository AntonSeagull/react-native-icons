

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuWifiOff = (props: IconProps) => {

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
          <Path  d="M12 20h.01" />
          <Path  d="M8.5 16.429a5 5 0 0 1 7 0" />
          <Path  d="M5 12.859a10 10 0 0 1 5.17-2.69" />
          <Path  d="M19 12.859a10 10 0 0 0-2.007-1.523" />
          <Path  d="M2 8.82a15 15 0 0 1 4.177-2.643" />
          <Path  d="M22 8.82a15 15 0 0 0-11.288-3.764" />
          <Path  d="m2 2 20 20" />
        </G>
      </Svg>
    );
  }

