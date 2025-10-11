

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLifebuoyOff = (props: IconProps) => {

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
          <Path d="M9.171 9.172a4 4 0 0 0 5.65 5.663m1.179 -2.835a4 4 0 0 0 -4 -4" />
          <Path d="M5.64 5.632a9 9 0 1 0 12.73 12.725m1.667 -2.301a9 9 0 0 0 -12.077 -12.1" />
          <Path d="M15 15l3.35 3.35" />
          <Path d="M9 15l-3.35 3.35" />
          <Path d="M5.65 5.65l3.35 3.35" />
          <Path d="M18.35 5.65l-3.35 3.35" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

