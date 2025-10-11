

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuKeyboardMusic = (props: IconProps) => {

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
          <Path d="M6 8h4" />
          <Path d="M14 8h.01" />
          <Path d="M18 8h.01" />
          <Path d="M2 12h20" />
          <Path d="M6 12v4" />
          <Path d="M10 12v4" />
          <Path d="M14 12v4" />
          <Path d="M18 12v4" />
        </G>
      </Svg>
    );
  }

