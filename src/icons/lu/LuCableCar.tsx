

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCableCar = (props: IconProps) => {

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
          <Path d="M10 3h.01" />
          <Path d="M14 2h.01" />
          <Path d="m2 9 20-5" />
          <Path d="M12 12V6.5" />
          <Path d="M9 12v5" />
          <Path d="M15 12v5" />
          <Path d="M4 17h16" />
        </G>
      </Svg>
    );
  }

