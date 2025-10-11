

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPilcrowRight = (props: IconProps) => {

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
          <Path d="M10 3v11" />
          <Path d="M10 9H7a1 1 0 0 1 0-6h8" />
          <Path d="M14 3v11" />
          <Path d="m18 14 4 4H2" />
          <Path d="m22 18-4 4" />
        </G>
      </Svg>
    );
  }

