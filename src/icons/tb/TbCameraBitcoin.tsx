

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCameraBitcoin = (props: IconProps) => {

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
          <Path d="M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" />
          <Path d="M14.477 11.307a3 3 0 1 0 -2.477 4.693" />
          <Path d="M17 21v-6" />
          <Path d="M19 15v-1.5" />
          <Path d="M19 22.5v-1.5" />
          <Path d="M17 18h3" />
          <Path d="M19 18h.5a1.5 1.5 0 0 1 0 3h-3.5" />
          <Path d="M19 18h.5a1.5 1.5 0 0 0 0 -3h-3.5" />
        </G>
      </Svg>
    );
  }

