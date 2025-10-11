

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathSec = (props: IconProps) => {

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
          <Path d="M3 15c.345 .6 1.258 1 2 1a2 2 0 1 0 0 -4a2 2 0 1 1 0 -4c.746 0 1.656 .394 2 1" />
          <Path d="M21 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
          <Path d="M14 8h-4v8h4" />
          <Path d="M10 12h2.5" />
        </G>
      </Svg>
    );
  }

