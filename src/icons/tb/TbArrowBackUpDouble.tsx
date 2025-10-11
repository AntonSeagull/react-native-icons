

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowBackUpDouble = (props: IconProps) => {

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
          <Path d="M13 14l-4 -4l4 -4" />
          <Path d="M8 14l-4 -4l4 -4" />
          <Path d="M9 10h7a4 4 0 1 1 0 8h-1" />
        </G>
      </Svg>
    );
  }

