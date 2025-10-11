

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBellElectric = (props: IconProps) => {

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
          <Path d="M18.518 17.347A7 7 0 0 1 14 19" />
          <Path d="M18.8 4A11 11 0 0 1 20 9" />
          <Path d="M9 9h.01" />
        </G>
      </Svg>
    );
  }

