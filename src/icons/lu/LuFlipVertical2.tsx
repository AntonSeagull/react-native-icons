

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFlipVertical2 = (props: IconProps) => {

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
          <Path d="m17 3-5 5-5-5h10" />
          <Path d="m17 21-5-5-5 5h10" />
          <Path d="M4 12H2" />
          <Path d="M10 12H8" />
          <Path d="M16 12h-2" />
          <Path d="M22 12h-2" />
        </G>
      </Svg>
    );
  }

