

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUsersMinus = (props: IconProps) => {

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
          <Path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <Path d="M3 21v-2a4 4 0 0 1 4 -4h4c.948 0 1.818 .33 2.504 .88" />
          <Path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <Path d="M16 19h6" />
        </G>
      </Svg>
    );
  }

