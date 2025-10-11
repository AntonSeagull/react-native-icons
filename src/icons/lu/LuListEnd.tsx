

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuListEnd = (props: IconProps) => {

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
          <Path d="M16 5H3" />
          <Path d="M16 12H3" />
          <Path d="M9 19H3" />
          <Path d="m16 16-3 3 3 3" />
          <Path d="M21 5v12a2 2 0 0 1-2 2h-6" />
        </G>
      </Svg>
    );
  }

