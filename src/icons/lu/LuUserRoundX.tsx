

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuUserRoundX = (props: IconProps) => {

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
          <Path d="M2 21a8 8 0 0 1 11.873-7" />
          <Path d="m17 17 5 5" />
          <Path d="m22 17-5 5" />
        </G>
      </Svg>
    );
  }

