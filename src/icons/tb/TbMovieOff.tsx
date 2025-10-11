

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMovieOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362 .359 -.859 .58 -1.408 .58h-12a2 2 0 0 1 -2 -2v-12c0 -.539 .213 -1.028 .56 -1.388" />
          <Path  d="M8 8v12" />
          <Path  d="M16 4v8m0 4v4" />
          <Path  d="M4 8h4" />
          <Path  d="M4 16h4" />
          <Path  d="M4 12h8m4 0h4" />
          <Path  d="M16 8h4" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

