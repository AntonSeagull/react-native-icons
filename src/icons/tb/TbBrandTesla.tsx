

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandTesla = (props: IconProps) => {

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
          <Path d="M12 21l3 -11c2.359 0 3 0 3 1c0 0 1.18 -1.745 2 -3c-3.077 -1.464 -6 -1 -6 -1l-2 2l-2 -2s-2.923 -.464 -6 1c.82 1.255 2 3 2 3c0 -1 .744 -1 3 -1z" />
          <Path d="M20 5c-5.114 -2 -10.886 -2 -16 0" />
        </G>
      </Svg>
    );
  }

