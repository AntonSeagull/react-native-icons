

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuHotel = (props: IconProps) => {

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
          <Path d="M10 22v-6.57" />
          <Path d="M12 11h.01" />
          <Path d="M12 7h.01" />
          <Path d="M14 15.43V22" />
          <Path d="M15 16a5 5 0 0 0-6 0" />
          <Path d="M16 11h.01" />
          <Path d="M16 7h.01" />
          <Path d="M8 11h.01" />
          <Path d="M8 7h.01" />
        </G>
      </Svg>
    );
  }

