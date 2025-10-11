

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiVirustotal = (props: IconProps) => {

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
          <Path d="M10.87 12L0 22.68h24V1.32H0zm10.73 8.52H5.28l8.637-8.448L5.28 3.48H21.6z" />
        </G>
      </Svg>
    );
  }

