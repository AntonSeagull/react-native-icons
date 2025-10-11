

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuNavigation2Off = (props: IconProps) => {

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
          <Path  d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
          <Path  d="M14.53 8.88 12 2l-1.17 3.17" />
        </G>
      </Svg>
    );
  }

