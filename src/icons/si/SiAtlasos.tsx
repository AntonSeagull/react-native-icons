

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiAtlasos = (props: IconProps) => {

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
          <Path d="m12 1.608 12 20.785H0l2.537-4.394h13.852L12 10.396l-1.844 3.193H5.082z" />
        </G>
      </Svg>
    );
  }

