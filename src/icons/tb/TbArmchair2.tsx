

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArmchair2 = (props: IconProps) => {

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
          <Path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />
          <Path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" />
          <Path d="M8 12h8" />
          <Path d="M7 19v2" />
          <Path d="M17 19v2" />
        </G>
      </Svg>
    );
  }

