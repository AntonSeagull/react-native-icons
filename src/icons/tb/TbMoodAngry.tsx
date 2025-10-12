

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodAngry = (props: IconProps) => {

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
          <Path  d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
          <Path  d="M8 9l2 1" />
          <Path  d="M16 9l-2 1" />
          <Path  d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
        </G>
      </Svg>
    );
  }

