

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceWatchCode = (props: IconProps) => {

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
          <Path d="M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4" />
          <Path d="M20 21l2 -2l-2 -2" />
          <Path d="M17 17l-2 2l2 2" />
          <Path d="M9 18v3h3" />
          <Path d="M9 6v-3h6v3" />
        </G>
      </Svg>
    );
  }

