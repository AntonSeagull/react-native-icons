

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMessageOff = (props: IconProps) => {

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
          <Path d="M8 9h1m4 0h3" />
          <Path d="M8 13h5" />
          <Path d="M8 4h10a3 3 0 0 1 3 3v8c0 .577 -.163 1.116 -.445 1.573m-2.555 1.427h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8c0 -1.085 .576 -2.036 1.439 -2.562" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

