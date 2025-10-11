

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuExpand = (props: IconProps) => {

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
          <Path d="m15 15 6 6" />
          <Path d="m15 9 6-6" />
          <Path d="M21 16v5h-5" />
          <Path d="M21 8V3h-5" />
          <Path d="M3 16v5h5" />
          <Path d="m3 21 6-6" />
          <Path d="M3 8V3h5" />
          <Path d="M9 9 3 3" />
        </G>
      </Svg>
    );
  }

