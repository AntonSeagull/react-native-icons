

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCalendarOff = (props: IconProps) => {

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
          <Path  d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" />
          <Path  d="M21 15.5V6a2 2 0 0 0-2-2H9.5" />
          <Path  d="M16 2v4" />
          <Path  d="M3 10h7" />
          <Path  d="M21 10h-5.5" />
          <Path  d="m2 2 20 20" />
        </G>
      </Svg>
    );
  }

