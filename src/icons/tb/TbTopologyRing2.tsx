

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTopologyRing2 = (props: IconProps) => {

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
          <Path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M7 18h10" />
          <Path d="M18 16l-5 -8" />
          <Path d="M11 8l-5 8" />
        </G>
      </Svg>
    );
  }

