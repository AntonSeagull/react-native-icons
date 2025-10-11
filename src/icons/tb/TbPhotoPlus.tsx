

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPhotoPlus = (props: IconProps) => {

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
          <Path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
          <Path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
          <Path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54" />
          <Path d="M16 19h6" />
          <Path d="M19 16v6" />
        </G>
      </Svg>
    );
  }

