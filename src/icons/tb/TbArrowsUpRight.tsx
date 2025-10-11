

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsUpRight = (props: IconProps) => {

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
          <Path d="M17 21l4 -4l-4 -4" />
          <Path d="M21 17h-11a3 3 0 0 1 -3 -3v-11" />
          <Path d="M11 7l-4 -4l-4 4" />
        </G>
      </Svg>
    );
  }

