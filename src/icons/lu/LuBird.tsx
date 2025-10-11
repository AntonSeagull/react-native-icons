

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBird = (props: IconProps) => {

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
          <Path d="M16 7h.01" />
          <Path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
          <Path d="m20 7 2 .5-2 .5" />
          <Path d="M10 18v3" />
          <Path d="M14 17.75V21" />
          <Path d="M7 18a6 6 0 0 0 3.84-10.61" />
        </G>
      </Svg>
    );
  }

