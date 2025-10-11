

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLuggageOff = (props: IconProps) => {

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
          <Path d="M10 6h6a2 2 0 0 1 2 2v6m0 4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-10c0 -.546 .218 -1.04 .573 -1.4" />
          <Path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
          <Path d="M6 10h4m4 0h4" />
          <Path d="M6 16h10" />
          <Path d="M9 20v1" />
          <Path d="M15 20v1" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

