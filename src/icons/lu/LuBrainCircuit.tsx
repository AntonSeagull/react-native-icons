

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBrainCircuit = (props: IconProps) => {

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
          <Path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
          <Path d="M9 13a4.5 4.5 0 0 0 3-4" />
          <Path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
          <Path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
          <Path d="M6 18a4 4 0 0 1-1.967-.516" />
          <Path d="M12 13h4" />
          <Path d="M12 18h6a2 2 0 0 1 2 2v1" />
          <Path d="M12 8h8" />
          <Path d="M16 8V5a2 2 0 0 1 2-2" />
        </G>
      </Svg>
    );
  }

