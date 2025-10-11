

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsRightDown = (props: IconProps) => {

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
          <Path  d="M3 17l4 4l4 -4" />
          <Path  d="M7 21v-11a3 3 0 0 1 3 -3h11" />
          <Path  d="M17 11l4 -4l-4 -4" />
        </G>
      </Svg>
    );
  }

