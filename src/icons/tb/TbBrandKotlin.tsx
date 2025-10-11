

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandKotlin = (props: IconProps) => {

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
          <Path d="M20 20h-16v-16h16" />
          <Path d="M4 20l16 -16" />
          <Path d="M4 12l8 -8" />
          <Path d="M12 12l8 8" />
        </G>
      </Svg>
    );
  }

