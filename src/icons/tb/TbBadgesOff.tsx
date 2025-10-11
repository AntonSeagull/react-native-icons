

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBadgesOff = (props: IconProps) => {

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
          <Path  d="M14.505 14.497l-2.505 1.503l-5 -3v4l5 3l5 -3" />
          <Path  d="M13.873 9.876l3.127 -1.876v-4l-5 3l-2.492 -1.495m-2.508 1.495v1l2.492 1.495" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

