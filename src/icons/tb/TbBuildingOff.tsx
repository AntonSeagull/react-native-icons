

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBuildingOff = (props: IconProps) => {

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
          <Path d="M3 21h18" />
          <Path d="M9 12h1" />
          <Path d="M9 16h1" />
          <Path d="M14 8h1" />
          <Path d="M14 16h1" />
          <Path d="M5 21v-16" />
          <Path d="M7 3h10c1 0 2 1 2 2v10" />
          <Path d="M19 19v2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

