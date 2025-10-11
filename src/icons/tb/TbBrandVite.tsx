

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandVite = (props: IconProps) => {

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
          <Path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z" />
          <Path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" />
        </G>
      </Svg>
    );
  }

