

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuListTree = (props: IconProps) => {

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
          <Path d="M8 5h13" />
          <Path d="M13 12h8" />
          <Path d="M13 19h8" />
          <Path d="M3 10a2 2 0 0 0 2 2h3" />
          <Path d="M3 5v12a2 2 0 0 0 2 2h3" />
        </G>
      </Svg>
    );
  }

