

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPictureInPicture = (props: IconProps) => {

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
          <Path d="M2 10h6V4" />
          <Path d="m2 4 6 6" />
          <Path d="M21 10V7a2 2 0 0 0-2-2h-7" />
          <Path d="M3 14v2a2 2 0 0 0 2 2h3" />
        </G>
      </Svg>
    );
  }

