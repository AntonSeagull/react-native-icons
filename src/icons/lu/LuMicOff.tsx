

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMicOff = (props: IconProps) => {

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
          <Path  d="M12 19v3" />
          <Path  d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
          <Path  d="M16.95 16.95A7 7 0 0 1 5 12v-2" />
          <Path  d="M18.89 13.23A7 7 0 0 0 19 12v-2" />
          <Path  d="m2 2 20 20" />
          <Path  d="M9 9v3a3 3 0 0 0 5.12 2.12" />
        </G>
      </Svg>
    );
  }

