

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSwitch = (props: IconProps) => {

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
          <Path  d="M15 4l4 0l0 4" />
          <Path  d="M14.75 9.25l4.25 -5.25" />
          <Path  d="M5 19l4 -4" />
          <Path  d="M15 19l4 0l0 -4" />
          <Path  d="M5 5l14 14" />
        </G>
      </Svg>
    );
  }

