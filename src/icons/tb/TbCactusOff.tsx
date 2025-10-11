

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCactusOff = (props: IconProps) => {

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
          <Path d="M6 9v1a3 3 0 0 0 3 3h1" />
          <Path d="M18 8v5a3 3 0 0 1 -.129 .872m-2.014 2a3 3 0 0 1 -.857 .124h-1" />
          <Path d="M10 21v-11m0 -4v-1a2 2 0 1 1 4 0v5m0 4v7" />
          <Path d="M7 21h10" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

