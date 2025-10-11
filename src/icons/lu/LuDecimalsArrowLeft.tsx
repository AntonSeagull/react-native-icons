

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuDecimalsArrowLeft = (props: IconProps) => {

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
          <Path d="m13 21-3-3 3-3" />
          <Path d="M20 18H10" />
          <Path d="M3 11h.01" />
        </G>
      </Svg>
    );
  }

