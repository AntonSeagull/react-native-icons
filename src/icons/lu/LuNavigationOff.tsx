

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuNavigationOff = (props: IconProps) => {

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
          <Path  d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" />
          <Path  d="M17.39 11.73 22 2l-9.73 4.61" />
        </G>
      </Svg>
    );
  }

