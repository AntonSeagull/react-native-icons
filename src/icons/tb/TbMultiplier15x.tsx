

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMultiplier15x = (props: IconProps) => {

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
          <Path d="M4 16v-8l-2 2" />
          <Path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4" />
          <Path d="M7 16v.01" />
          <Path d="M17 16l4 -4" />
          <Path d="M21 16l-4 -4" />
        </G>
      </Svg>
    );
  }

