

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPhotoShare = (props: IconProps) => {

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
          <Path d="M15 8h.01" />
          <Path d="M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7" />
          <Path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" />
          <Path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0" />
          <Path d="M16 22l5 -5" />
          <Path d="M21 21.5v-4.5h-4.5" />
        </G>
      </Svg>
    );
  }

