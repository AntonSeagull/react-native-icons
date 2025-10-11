

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuArrowUpDown = (props: IconProps) => {

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
          <Path d="m21 16-4 4-4-4" />
          <Path d="M17 20V4" />
          <Path d="m3 8 4-4 4 4" />
          <Path d="M7 4v16" />
        </G>
      </Svg>
    );
  }

