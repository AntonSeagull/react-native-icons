

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMath1Divide3 = (props: IconProps) => {

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
          <Path d="M10 15.5a.5 .5 0 0 1 .5 -.5h2a1.5 1.5 0 0 1 0 3h-1.167h1.167a1.5 1.5 0 0 1 0 3h-2a.5 .5 0 0 1 -.5 -.5" />
          <Path d="M5 12h14" />
          <Path d="M10 5l2 -2v6" />
        </G>
      </Svg>
    );
  }

