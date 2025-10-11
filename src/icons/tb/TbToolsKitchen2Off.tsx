

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbToolsKitchen2Off = (props: IconProps) => {

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
          <Path d="M14.386 10.409c.53 -2.28 1.766 -4.692 4.614 -7.409v12m-4 0h-1c0 -.313 0 -.627 0 -.941" />
          <Path d="M19 19v2h-1v-3" />
          <Path d="M8 8v13" />
          <Path d="M5 5v2a3 3 0 0 0 4.546 2.572m1.454 -2.572v-3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

