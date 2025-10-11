

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuReplace = (props: IconProps) => {

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
          <Path d="M14 4a1 1 0 0 1 1-1" />
          <Path d="M15 10a1 1 0 0 1-1-1" />
          <Path d="M21 4a1 1 0 0 0-1-1" />
          <Path d="M21 9a1 1 0 0 1-1 1" />
          <Path d="m3 7 3 3 3-3" />
          <Path d="M6 10V5a2 2 0 0 1 2-2h2" />
        </G>
      </Svg>
    );
  }

