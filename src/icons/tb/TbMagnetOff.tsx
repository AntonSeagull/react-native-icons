

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMagnetOff = (props: IconProps) => {

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
          <Path d="M7 3a2 2 0 0 1 2 2m0 4v4a3 3 0 0 0 5.552 1.578m.448 -3.578v-6a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a7.99 7.99 0 0 1 -.424 2.577m-1.463 2.584a8 8 0 0 1 -14.113 -5.161v-8c0 -.297 .065 -.58 .181 -.833" />
          <Path d="M4 8h4" />
          <Path d="M15 8h4" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

