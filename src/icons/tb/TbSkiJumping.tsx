

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSkiJumping = (props: IconProps) => {

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
          <Path  d="M11 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path  d="M17 17.5l-5 -4.5v-6l5 4" />
          <Path  d="M7 17.5l5 -4.5" />
          <Path  d="M15.103 21.58l6.762 -14.502a2 2 0 0 0 -.968 -2.657" />
          <Path  d="M8.897 21.58l-6.762 -14.503a2 2 0 0 1 .968 -2.657" />
          <Path  d="M7 11l5 -4" />
        </G>
      </Svg>
    );
  }

