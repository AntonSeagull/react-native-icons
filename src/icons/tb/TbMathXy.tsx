

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathXy = (props: IconProps) => {

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
          <Path d="M14 9l3 5.063" />
          <Path d="M4 9l6 6" />
          <Path d="M4 15l6 -6" />
          <Path d="M20 9l-4.8 9" />
        </G>
      </Svg>
    );
  }

