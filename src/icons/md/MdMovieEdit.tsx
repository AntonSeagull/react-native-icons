

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdMovieEdit = (props: IconProps) => {

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
          <Path  d="M4 10h18V6c0-1.1-.9-2-2-2h-3l2 4h-3l-2-4h-2l2 4h-3L9 4H7l2 4H6L4 4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h8v-2H4v-8z" />
          <Path  d="m22.71 13-.71-.71c-.39-.39-1.02-.39-1.41 0l-.71.71L22 15.12l.71-.71c.39-.39.39-1.02 0-1.41z" />
        </G>
      </Svg>
    );
  }

