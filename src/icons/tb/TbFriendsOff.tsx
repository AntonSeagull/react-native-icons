

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFriendsOff = (props: IconProps) => {

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
          <Path d="M5 5a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" />
          <Path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
          <Path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M15 22v-4h-2l1.254 -3.763m1.036 -2.942a1 1 0 0 1 .71 -.295h2a1 1 0 0 1 1 1l1.503 4.508m-1.503 2.492v3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

