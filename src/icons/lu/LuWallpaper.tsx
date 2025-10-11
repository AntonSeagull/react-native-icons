

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuWallpaper = (props: IconProps) => {

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
          <Path d="M12 17v4" />
          <Path d="M8 21h8" />
          <Path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" />
        </G>
      </Svg>
    );
  }

