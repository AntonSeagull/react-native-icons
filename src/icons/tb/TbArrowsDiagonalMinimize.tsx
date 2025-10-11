

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsDiagonalMinimize = (props: IconProps) => {

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
          <Path d="M6 10h4v-4" />
          <Path d="M4 4l6 6" />
          <Path d="M18 14h-4v4" />
          <Path d="M14 14l6 6" />
        </G>
      </Svg>
    );
  }

