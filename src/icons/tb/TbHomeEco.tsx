

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHomeEco = (props: IconProps) => {

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
          <Path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
          <Path d="M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215" />
          <Path d="M16 22s0 -2 3 -4" />
          <Path d="M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3z" />
        </G>
      </Svg>
    );
  }

