

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTextDirectionRtl = (props: IconProps) => {

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
          <Path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5" />
          <Path d="M14 15v-11" />
          <Path d="M10 15v-11" />
          <Path d="M5 19h14" />
          <Path d="M7 21l-2 -2l2 -2" />
        </G>
      </Svg>
    );
  }

