

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceSim = (props: IconProps) => {

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
          <Path d="M6 3h8.5l4.5 4.5v12.5a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1z" />
          <Path d="M9 11h3v6" />
          <Path d="M15 17v.01" />
          <Path d="M15 14v.01" />
          <Path d="M15 11v.01" />
          <Path d="M9 14v.01" />
          <Path d="M9 17v.01" />
        </G>
      </Svg>
    );
  }

