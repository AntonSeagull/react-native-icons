

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiCrossroad = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M164 16l-32 16 32 32 64 16V32l-64-16zm184 0l-64 16v48l64-16 32-32-32-16zM247 32v112h18V32h-18zM16 64l182.7 182.7L96 496h320L313.3 246.7 496 64h-64L256 192 80 64H16z" fill="#000" />
        </G>
      </Svg>
    );
  }

