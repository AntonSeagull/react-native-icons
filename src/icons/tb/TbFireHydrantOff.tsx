

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFireHydrantOff = (props: IconProps) => {

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
          <Path d="M17 21v-4m2 -2v-2a1 1 0 0 0 -1 -1h-1v-4a5 5 0 0 0 -8.533 -3.538m-1.387 2.638a5.03 5.03 0 0 0 -.08 .9v4h-1a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h1v5" />
          <Path d="M12 12a2 2 0 1 0 2 2" />
          <Path d="M6 8h2m4 0h6" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

