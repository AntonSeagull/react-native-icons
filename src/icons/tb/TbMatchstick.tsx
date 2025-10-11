

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMatchstick = (props: IconProps) => {

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
          <Path d="M3 21l14 -9" />
          <Path d="M17 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M17 3l3.62 7.29a4.007 4.007 0 0 1 -.764 4.51a4 4 0 0 1 -6.493 -4.464l3.637 -7.336z" />
        </G>
      </Svg>
    );
  }

