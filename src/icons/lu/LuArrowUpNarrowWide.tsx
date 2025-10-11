

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuArrowUpNarrowWide = (props: IconProps) => {

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
          <Path d="m3 8 4-4 4 4" />
          <Path d="M7 4v16" />
          <Path d="M11 12h4" />
          <Path d="M11 16h7" />
          <Path d="M11 20h10" />
        </G>
      </Svg>
    );
  }

