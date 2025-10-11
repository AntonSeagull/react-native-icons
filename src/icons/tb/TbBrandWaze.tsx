

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandWaze = (props: IconProps) => {

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
          <Path d="M6.66 17.52a7 7 0 0 1 -3.66 -4.52c2 0 3 -1 3 -2.51c0 -3.92 2.25 -7.49 7.38 -7.49c4.62 0 7.62 3.51 7.62 8a8.08 8.08 0 0 1 -3.39 6.62" />
          <Path d="M10 18.69a17.29 17.29 0 0 0 3.33 .3h.54" />
          <Path d="M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M8 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M16 9h.01" />
          <Path d="M11 9h.01" />
        </G>
      </Svg>
    );
  }

