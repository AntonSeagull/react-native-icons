

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuArrowUpAZ = (props: IconProps) => {

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
          <Path d="M20 8h-5" />
          <Path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
          <Path d="M15 14h5l-5 6h5" />
        </G>
      </Svg>
    );
  }

