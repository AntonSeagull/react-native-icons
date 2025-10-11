

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGalleryThumbnails = (props: IconProps) => {

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
          <Path d="M4 21h1" />
          <Path d="M9 21h1" />
          <Path d="M14 21h1" />
          <Path d="M19 21h1" />
        </G>
      </Svg>
    );
  }

