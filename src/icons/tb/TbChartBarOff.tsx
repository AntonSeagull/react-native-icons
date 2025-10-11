

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartBarOff = (props: IconProps) => {

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
          <Path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
          <Path d="M12 8h2a1 1 0 0 1 1 1v2m0 4v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-10" />
          <Path d="M15 11v-6a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v12m-1 3h-4a1 1 0 0 1 -1 -1v-4" />
          <Path d="M4 20h14" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

