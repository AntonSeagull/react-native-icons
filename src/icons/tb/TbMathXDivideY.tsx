

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathXDivideY = (props: IconProps) => {

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
          <Path d="M9 3l6 6" />
          <Path d="M9 9l6 -6" />
          <Path d="M9 15l3 4.5" />
          <Path d="M15 15l-4.5 7" />
          <Path d="M5 12h14" />
        </G>
      </Svg>
    );
  }

