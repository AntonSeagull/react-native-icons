

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceWatchStats = (props: IconProps) => {

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
          <Path d="M6 6m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
          <Path d="M9 18v3h6v-3" />
          <Path d="M9 6v-3h6v3" />
          <Path d="M9 14v-4" />
          <Path d="M12 14v-1" />
          <Path d="M15 14v-3" />
        </G>
      </Svg>
    );
  }

