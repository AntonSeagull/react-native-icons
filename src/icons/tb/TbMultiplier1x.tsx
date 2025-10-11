

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMultiplier1x = (props: IconProps) => {

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
          <Path d="M9 16v-8l-2 2" />
          <Path d="M13 16l4 -4" />
          <Path d="M17 16l-4 -4" />
        </G>
      </Svg>
    );
  }

