

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPennantOff = (props: IconProps) => {

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
          <Path d="M8 21h4" />
          <Path d="M10 21v-11m0 -4v-3" />
          <Path d="M10 4l9 4l-4.858 2.16m-2.764 1.227l-1.378 .613" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

