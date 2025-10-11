

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBlurOff = (props: IconProps) => {

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
          <Path d="M12 3v5m0 4v8" />
          <Path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
          <Path d="M16 12h5" />
          <Path d="M13 9h7" />
          <Path d="M12 6h6" />
          <Path d="M12 18h6" />
          <Path d="M12 15h3m4 0h1" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

