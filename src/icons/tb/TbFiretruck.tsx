

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFiretruck = (props: IconProps) => {

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
          <Path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5" />
          <Path d="M12 18v-11h3" />
          <Path d="M3 17l0 -5l9 0" />
          <Path d="M3 9l18 -6" />
          <Path d="M6 12l0 -4" />
        </G>
      </Svg>
    );
  }

