

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuAlarmClockOff = (props: IconProps) => {

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
          <Path  d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
          <Path  d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
          <Path  d="m22 6-3-3" />
          <Path  d="M6.26 18.67 4 21" />
          <Path  d="m2 2 20 20" />
          <Path  d="M4 4 2 6" />
        </G>
      </Svg>
    );
  }

