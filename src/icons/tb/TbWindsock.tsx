

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWindsock = (props: IconProps) => {

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
          <Path d="M6 3v18" />
          <Path d="M6 11l12 -1v-4l-12 -1" />
          <Path d="M10 5.5v5" />
          <Path d="M14 6v4" />
          <Path d="M4 21h4" />
        </G>
      </Svg>
    );
  }

