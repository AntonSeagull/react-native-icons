

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodOff = (props: IconProps) => {

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
          <Path  d="M5.634 5.638a9 9 0 0 0 12.732 12.724m1.679 -2.322a9 9 0 0 0 -12.08 -12.086" />
          <Path  d="M9 10h.01" />
          <Path  d="M15 10h.01" />
          <Path  d="M9.5 15a3.5 3.5 0 0 0 5 0" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

