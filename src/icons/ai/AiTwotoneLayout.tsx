

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const AiTwotoneLayout = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 1024 1024"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M384 185h456v136H384zm-200 0h136v656H184zm696-73H144c-17.7 0-32 14.3-32 32v1c0-17.7 14.3-32 32-32h736c17.7 0 32 14.3 32 32v-1c0-17.7-14.3-32-32-32zM384 385h456v456H384z" fill="#D9D9D9" />
          <Path d="M880 113H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V145c0-17.7-14.3-32-32-32zM320 841H184V185h136v656zm520 0H384V385h456v456zm0-520H384V185h456v136z" />
        </G>
      </Svg>
    );
  }

