

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuHardHat = (props: IconProps) => {

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
          <Path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
          <Path d="M14 6a6 6 0 0 1 6 6v3" />
          <Path d="M4 15v-3a6 6 0 0 1 6-6" />
        </G>
      </Svg>
    );
  }

