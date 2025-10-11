

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMobiledataOff = (props: IconProps) => {

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
          <Path d="M16 12v-8" />
          <Path d="M8 20v-8" />
          <Path d="M13 7l3 -3l3 3" />
          <Path d="M5 17l3 3l3 -3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

