

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPanelLeftRightDashed = (props: IconProps) => {

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
          <Path d="M15 10V9" />
          <Path d="M15 15v-1" />
          <Path d="M15 21v-2" />
          <Path d="M15 5V3" />
          <Path d="M9 10V9" />
          <Path d="M9 15v-1" />
          <Path d="M9 21v-2" />
          <Path d="M9 5V3" />
        </G>
      </Svg>
    );
  }

