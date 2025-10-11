

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuAlarmClockMinus = (props: IconProps) => {

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
          <Path  d="M5 3 2 6" />
          <Path  d="m22 6-3-3" />
          <Path  d="M6.38 18.7 4 21" />
          <Path  d="M17.64 18.67 20 21" />
          <Path  d="M9 13h6" />
        </G>
      </Svg>
    );
  }

