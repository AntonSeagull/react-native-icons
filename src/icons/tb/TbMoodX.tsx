

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodX = (props: IconProps) => {

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
          <Path  d="M20.983 12.556a9 9 0 1 0 -8.433 8.427" />
          <Path  d="M9 10h.01" />
          <Path  d="M15 10h.01" />
          <Path  d="M9.5 15c.658 .64 1.56 1 2.5 1c.194 0 .386 -.015 .574 -.045" />
          <Path  d="M21.5 21.5l-5 -5" />
          <Path  d="M16.5 21.5l5 -5" />
        </G>
      </Svg>
    );
  }

