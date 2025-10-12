

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodAnnoyed2 = (props: IconProps) => {

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
          <Path  d="M15 14c-2 0 -3 1 -3.5 2.05" />
          <Path  d="M10 9.25c-.5 1 -2.5 1 -3 0" />
          <Path  d="M17 9.25c-.5 1 -2.5 1 -3 0" />
        </G>
      </Svg>
    );
  }

