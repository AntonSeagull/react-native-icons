

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMusic = (props: IconProps) => {

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
          <Path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <Path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <Path d="M9 17v-13h10v13" />
          <Path d="M9 8h10" />
        </G>
      </Svg>
    );
  }

