

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuListChevronsDownUp = (props: IconProps) => {

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
          <Path d="M3 5h8" />
          <Path d="M3 12h8" />
          <Path d="M3 19h8" />
          <Path d="m15 5 3 3 3-3" />
          <Path d="m15 19 3-3 3 3" />
        </G>
      </Svg>
    );
  }

