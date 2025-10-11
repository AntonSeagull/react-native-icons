

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathXFloorDivideY = (props: IconProps) => {

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
          <Path d="M1.5 19l18 -18" />
          <Path d="M4.5 22l18 -18" />
          <Path d="M18 15l3 4" />
          <Path d="M23 15l-4.5 8" />
          <Path d="M1 1l6 6" />
          <Path d="M1 7l6 -6" />
        </G>
      </Svg>
    );
  }

