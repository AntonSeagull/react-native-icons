

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWashDryOff = (props: IconProps) => {

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
          <Path d="M20.116 20.127a2.99 2.99 0 0 1 -2.116 .873h-12a3 3 0 0 1 -3 -3v-12c0 -.827 .335 -1.576 .877 -2.12m3.123 -.88h11a3 3 0 0 1 3 3v11" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

