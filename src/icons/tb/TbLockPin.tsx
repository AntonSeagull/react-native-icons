

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLockPin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12.5 21h-5.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10c.24 0 .47 .042 .683 .12" />
          <Path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path d="M8 11v-4a4 4 0 1 1 8 0v4" />
          <Path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
          <Path d="M19 18v.01" />
        </G>
      </Svg>
    );
  }

