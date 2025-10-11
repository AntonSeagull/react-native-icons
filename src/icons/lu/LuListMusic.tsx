

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuListMusic = (props: IconProps) => {

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
          <Path d="M11 12H3" />
          <Path d="M11 19H3" />
          <Path d="M21 16V5" />
        </G>
      </Svg>
    );
  }

