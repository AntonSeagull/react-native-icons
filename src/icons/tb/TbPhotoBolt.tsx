

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPhotoBolt = (props: IconProps) => {

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
          <Path  d="M15 8h.01" />
          <Path  d="M13.5 21h-7.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
          <Path  d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
          <Path  d="M14 14l1 -1c.669 -.643 1.45 -.823 2.18 -.54" />
          <Path  d="M19 16l-2 3h4l-2 3" />
        </G>
      </Svg>
    );
  }

