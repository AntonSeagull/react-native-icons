

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBugOff = (props: IconProps) => {

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
          <Path d="M9.884 5.873a3 3 0 0 1 5.116 2.127v1" />
          <Path d="M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705a5 5 0 0 1 -9.702 -1.705v-3a6 6 0 0 1 1 -3h1" />
          <Path d="M3 13h4" />
          <Path d="M17 13h4" />
          <Path d="M12 20v-6" />
          <Path d="M4 19l3.35 -2" />
          <Path d="M4 7l3.75 2.4" />
          <Path d="M20 7l-3.75 2.4" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

