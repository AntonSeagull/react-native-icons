

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGardenCartOff = (props: IconProps) => {

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
          <Path d="M15.733 15.732a2.5 2.5 0 1 0 3.544 3.527" />
          <Path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" />
          <Path d="M6 8h2m4 0h9l-3 6.01m-3.319 .693l-4.276 -.45a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

