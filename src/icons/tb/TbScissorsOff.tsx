

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbScissorsOff = (props: IconProps) => {

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
          <Path d="M4.432 4.442a3 3 0 1 0 4.114 4.146" />
          <Path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M8.6 15.4l3.4 -3.4m2 -2l5 -5" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

