

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuChartColumn = (props: IconProps) => {

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
          <Path d="M3 3v16a2 2 0 0 0 2 2h16" />
          <Path d="M18 17V9" />
          <Path d="M13 17V5" />
          <Path d="M8 17v-3" />
        </G>
      </Svg>
    );
  }

