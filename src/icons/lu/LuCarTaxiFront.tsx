

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCarTaxiFront = (props: IconProps) => {

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
          <Path d="M10 2h4" />
          <Path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
          <Path d="M7 14h.01" />
          <Path d="M17 14h.01" />
          <Path d="M5 18v2" />
          <Path d="M19 18v2" />
        </G>
      </Svg>
    );
  }

