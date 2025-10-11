

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuArrowsUpFromLine = (props: IconProps) => {

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
          <Path d="m4 6 3-3 3 3" />
          <Path d="M7 17V3" />
          <Path d="m14 6 3-3 3 3" />
          <Path d="M17 17V3" />
          <Path d="M4 21h16" />
        </G>
      </Svg>
    );
  }

