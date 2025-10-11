

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoWaterOutline = (props: IconProps) => {

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
          <Path d="M400,320c0,88.37-55.63,144-144,144S112,408.37,112,320c0-94.83,103.23-222.85,134.89-259.88a12,12,0,0,1,18.23,0C296.77,97.15,400,225.17,400,320Z" />
          <Path d="M344,328a72,72,0,0,1-72,72" />
        </G>
      </Svg>
    );
  }

