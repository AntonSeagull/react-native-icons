

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowSharpTurnLeft = (props: IconProps) => {

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
          <Path d="M17 18v-11.31a.7 .7 0 0 0 -1.195 -.495l-9.805 9.805" />
          <Path d="M11 16h-5v-5" />
        </G>
      </Svg>
    );
  }

