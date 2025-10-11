

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceWatchOff = (props: IconProps) => {

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
          <Path d="M10 6h5a3 3 0 0 1 3 3v5m-.89 3.132a2.99 2.99 0 0 1 -2.11 .868h-6a3 3 0 0 1 -3 -3v-6c0 -.817 .327 -1.559 .857 -2.1" />
          <Path d="M9 18v3h6v-3" />
          <Path d="M9 5v-2h6v3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

