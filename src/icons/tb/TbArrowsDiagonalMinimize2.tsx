

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsDiagonalMinimize2 = (props: IconProps) => {

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
          <Path d="M18 10h-4v-4" />
          <Path d="M20 4l-6 6" />
          <Path d="M6 14h4v4" />
          <Path d="M10 14l-6 6" />
        </G>
      </Svg>
    );
  }

