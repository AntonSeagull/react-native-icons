

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFileShredder = (props: IconProps) => {

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
          <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <Path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
          <Path d="M3 12l18 0" />
          <Path d="M6 16l0 2" />
          <Path d="M10 16l0 6" />
          <Path d="M14 16l0 2" />
          <Path d="M18 16l0 4" />
        </G>
      </Svg>
    );
  }

