

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuDrone = (props: IconProps) => {

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
          <Path  d="M10 10 7 7" />
          <Path  d="m10 14-3 3" />
          <Path  d="m14 10 3-3" />
          <Path  d="m14 14 3 3" />
          <Path  d="M14.205 4.139a4 4 0 1 1 5.439 5.863" />
          <Path  d="M19.637 14a4 4 0 1 1-5.432 5.868" />
          <Path  d="M4.367 10a4 4 0 1 1 5.438-5.862" />
          <Path  d="M9.795 19.862a4 4 0 1 1-5.429-5.873" />
        </G>
      </Svg>
    );
  }

