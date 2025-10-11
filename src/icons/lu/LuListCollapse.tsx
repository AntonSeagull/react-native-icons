

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuListCollapse = (props: IconProps) => {

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
          <Path d="M10 5h11" />
          <Path d="M10 12h11" />
          <Path d="M10 19h11" />
          <Path d="m3 10 3-3-3-3" />
          <Path d="m3 20 3-3-3-3" />
        </G>
      </Svg>
    );
  }

