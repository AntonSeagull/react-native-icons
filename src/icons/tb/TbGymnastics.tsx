

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGymnastics = (props: IconProps) => {

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
          <Path d="M7 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path d="M13 21l1 -9l7 -6" />
          <Path d="M3 11h6l5 1" />
          <Path d="M11.5 8.5l4.5 -3.5" />
        </G>
      </Svg>
    );
  }

