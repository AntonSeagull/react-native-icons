

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCakeRoll = (props: IconProps) => {

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
          <Path d="M12 15c-4.97 0 -9 -2.462 -9 -5.5s4.03 -5.5 9 -5.5s9 2.462 9 5.5s-4.03 5.5 -9 5.5" />
          <Path d="M12 6.97c3 0 4 1.036 4 1.979c0 2.805 -8 2.969 -8 -.99c0 -2.11 1.5 -3.959 4 -3.959" />
          <Path d="M21 9.333v5.334c0 2.945 -4.03 5.333 -9 5.333s-9 -2.388 -9 -5.333v-5.334" />
        </G>
      </Svg>
    );
  }

