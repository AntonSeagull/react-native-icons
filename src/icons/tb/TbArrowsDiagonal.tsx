

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsDiagonal = (props: IconProps) => {

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
          <Path d="M16 4l4 0l0 4" />
          <Path d="M14 10l6 -6" />
          <Path d="M8 20l-4 0l0 -4" />
          <Path d="M4 20l6 -6" />
        </G>
      </Svg>
    );
  }

