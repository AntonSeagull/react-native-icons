

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPhotoAi = (props: IconProps) => {

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
          <Path d="M10 21h-4a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5" />
          <Path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l1 1" />
          <Path d="M14 21v-4a2 2 0 1 1 4 0v4" />
          <Path d="M14 19h4" />
          <Path d="M21 15v6" />
        </G>
      </Svg>
    );
  }

