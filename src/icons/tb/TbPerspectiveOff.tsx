

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPerspectiveOff = (props: IconProps) => {

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
          <Path d="M8.511 4.502l9.63 1.375a1 1 0 0 1 .859 .99v8.133m-.859 3.123l-12 1.714a1 1 0 0 1 -1.141 -.99v-13.694a1 1 0 0 1 .01 -.137" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

