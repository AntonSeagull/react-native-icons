

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMicrowaveOff = (props: IconProps) => {

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
          <Path d="M18 18h-14a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h2m4 0h10a1 1 0 0 1 1 1v10" />
          <Path d="M15 6v5m0 4v3" />
          <Path d="M18 12h.01" />
          <Path d="M18 9h.01" />
          <Path d="M6.5 10.5c1 -.667 1.5 -.667 2.5 0c.636 .265 1.272 .665 1.907 .428" />
          <Path d="M6.5 13.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

