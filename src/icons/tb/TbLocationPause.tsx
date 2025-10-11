

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLocationPause = (props: IconProps) => {

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
          <Path d="M13.02 20.04l-3.02 -6.04l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.634 10.062" />
          <Path d="M17 17v5" />
          <Path d="M21 17v5" />
        </G>
      </Svg>
    );
  }

