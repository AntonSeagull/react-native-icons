

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMicroscopeOff = (props: IconProps) => {

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
          <Path d="M5 21h14" />
          <Path d="M6 18h2" />
          <Path d="M7 18v3" />
          <Path d="M10 10l-1 1l3 3l1 -1m2 -2l3 -3l-3 -3l-3 3" />
          <Path d="M10.5 12.5l-1.5 1.5" />
          <Path d="M17 3l3 3" />
          <Path d="M12 21a6 6 0 0 0 5.457 -3.505m.441 -3.599a6 6 0 0 0 -2.183 -3.608" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

