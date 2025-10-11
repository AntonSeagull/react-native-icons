

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandOkRu = (props: IconProps) => {

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
          <Path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M20 12c0 8 0 8 -8 8s-8 0 -8 -8s0 -8 8 -8s8 0 8 8z" />
          <Path d="M9.5 13c1.333 .667 3.667 .667 5 0" />
          <Path d="M9.5 17l2.5 -3l2.5 3" />
          <Path d="M12 13.5v.5" />
        </G>
      </Svg>
    );
  }

