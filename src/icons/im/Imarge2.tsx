

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imarge2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M16 0v6.5l-2.5-2.5-3 3-1.5-1.5 3-3-2.5-2.5zM7 10.5l-3 3 2.5 2.5h-6.5v-6.5l2.5 2.5 3-3z" fill="#000000" />
        </G>
      </Svg>
    );
  }

