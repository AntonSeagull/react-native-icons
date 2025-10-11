

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCalendarRange = (props: IconProps) => {

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
          <Path  d="M16 2v4" />
          <Path  d="M3 10h18" />
          <Path  d="M8 2v4" />
          <Path  d="M17 14h-6" />
          <Path  d="M13 18H7" />
          <Path  d="M7 14h.01" />
          <Path  d="M17 18h.01" />
        </G>
      </Svg>
    );
  }

