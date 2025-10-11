

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuListStart = (props: IconProps) => {

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
          <Path d="M3 5h6" />
          <Path d="M3 12h13" />
          <Path d="M3 19h13" />
          <Path d="m16 8-3-3 3-3" />
          <Path d="M21 19V7a2 2 0 0 0-2-2h-6" />
        </G>
      </Svg>
    );
  }

