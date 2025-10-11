

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSitemapFilled = (props: IconProps) => {

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
          <Path  d="M2 16.667a2.667 2.667 0 0 1 2.667 -2.667h2.666a2.667 2.667 0 0 1 2.667 2.667v2.666a2.667 2.667 0 0 1 -2.667 2.667h-2.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
          <Path  d="M14 16.667a2.667 2.667 0 0 1 2.667 -2.667h2.666a2.667 2.667 0 0 1 2.667 2.667v2.666a2.667 2.667 0 0 1 -2.667 2.667h-2.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
          <Path  d="M8 4.667a2.667 2.667 0 0 1 2.667 -2.667h2.666a2.667 2.667 0 0 1 2.667 2.667v2.666a2.667 2.667 0 0 1 -2.667 2.667h-2.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
          <Path  d="M12 8a1 1 0 0 0 -1 1v2h-3c-1.645 0 -3 1.355 -3 3v1a1 1 0 0 0 1 1a1 1 0 0 0 1 -1v-1c0 -.564 .436 -1 1 -1h8c.564 0 1 .436 1 1v1a1 1 0 0 0 1 1a1 1 0 0 0 1 -1v-1c0 -1.645 -1.355 -3 -3 -3h-3v-2a1 1 0 0 0 -1 -1z" />
        </G>
      </Svg>
    );
  }

