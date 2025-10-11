

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuWifiSync = (props: IconProps) => {

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
          <Path d="M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" />
          <Path d="M11.965 14.105h4" />
          <Path d="M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" />
          <Path d="M2 8.82a15 15 0 0 1 20 0" />
          <Path d="M21.965 22.105v-4" />
          <Path d="M5 12.86a10 10 0 0 1 3-2.032" />
          <Path d="M8.5 16.429h.01" />
        </G>
      </Svg>
    );
  }

