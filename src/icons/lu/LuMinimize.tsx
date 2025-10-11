

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMinimize = (props: IconProps) => {

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
          <Path d="M8 3v3a2 2 0 0 1-2 2H3" />
          <Path d="M21 8h-3a2 2 0 0 1-2-2V3" />
          <Path d="M3 16h3a2 2 0 0 1 2 2v3" />
          <Path d="M16 21v-3a2 2 0 0 1 2-2h3" />
        </G>
      </Svg>
    );
  }

