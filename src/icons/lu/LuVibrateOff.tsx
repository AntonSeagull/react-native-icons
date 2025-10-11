

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuVibrateOff = (props: IconProps) => {

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
          <Line  x1="2" x2="22" y1="2" y2="22" />
          <Path  d="m2 8 2 2-2 2 2 2-2 2" />
          <Path  d="m22 8-2 2 2 2-2 2 2 2" />
          <Path  d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" />
          <Path  d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" />
        </G>
      </Svg>
    );
  }

