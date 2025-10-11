

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDevicesShare = (props: IconProps) => {

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
          <Path d="M13 15v-6a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4" />
          <Path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
          <Path d="M16 22l5 -5" />
          <Path d="M21 21.5v-4.5h-4.5" />
          <Path d="M16 9h2" />
        </G>
      </Svg>
    );
  }

