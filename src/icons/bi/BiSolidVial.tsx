

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidVial = (props: IconProps) => {

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
          <Path  d="M7 22a4.965 4.965 0 0 0 3.535-1.465l9.193-9.193.707.708 1.414-1.414-8.485-8.486-1.414 1.414.708.707-9.193 9.193C2.521 14.408 2 15.664 2 17s.521 2.592 1.465 3.535A4.965 4.965 0 0 0 7 22zM18.314 9.928 15.242 13H6.758l7.314-7.314 4.242 4.242z" />
        </G>
      </Svg>
    );
  }

