

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuArrowRightLeft = (props: IconProps) => {

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
          <Path d="m16 3 4 4-4 4" />
          <Path d="M20 7H4" />
          <Path d="m8 21-4-4 4-4" />
          <Path d="M4 17h16" />
        </G>
      </Svg>
    );
  }

