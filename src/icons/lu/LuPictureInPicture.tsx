

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPictureInPicture = (props: IconProps) => {

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
          <Path  d="M2 10h6V4" />
          <Path  d="m2 4 6 6" />
          <Path  d="M21 10V7a2 2 0 0 0-2-2h-7" />
          <Path  d="M3 14v2a2 2 0 0 0 2 2h3" />
        </G>
      </Svg>
    );
  }

