

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuListOrdered = (props: IconProps) => {

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
          <Path d="M11 5h10" />
          <Path d="M11 12h10" />
          <Path d="M11 19h10" />
          <Path d="M4 4h1v5" />
          <Path d="M4 9h2" />
          <Path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" />
        </G>
      </Svg>
    );
  }

