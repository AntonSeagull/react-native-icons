

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceTabletX = (props: IconProps) => {

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
          <Path d="M13 21h-7a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5" />
          <Path d="M22 22l-5 -5" />
          <Path d="M17 22l5 -5" />
          <Path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        </G>
      </Svg>
    );
  }

