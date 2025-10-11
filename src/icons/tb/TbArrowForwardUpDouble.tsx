

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowForwardUpDouble = (props: IconProps) => {

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
          <Path d="M11 14l4 -4l-4 -4" />
          <Path d="M16 14l4 -4l-4 -4" />
          <Path d="M15 10h-7a4 4 0 1 0 0 8h1" />
        </G>
      </Svg>
    );
  }

