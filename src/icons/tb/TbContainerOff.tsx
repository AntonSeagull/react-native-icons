

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbContainerOff = (props: IconProps) => {

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
          <Path d="M20 4v.01" />
          <Path d="M20 20v.01" />
          <Path d="M20 16v.01" />
          <Path d="M20 12v.01" />
          <Path d="M20 8v.01" />
          <Path d="M8.297 4.289a1 1 0 0 1 .703 -.289h6a1 1 0 0 1 1 1v7m0 4v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-11" />
          <Path d="M4 4v.01" />
          <Path d="M4 20v.01" />
          <Path d="M4 16v.01" />
          <Path d="M4 12v.01" />
          <Path d="M4 8v.01" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

