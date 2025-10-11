

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBellRinging = (props: IconProps) => {

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
          <Path  d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
          <Path  d="M9 17v1a3 3 0 0 0 6 0v-1" />
          <Path  d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
          <Path  d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
        </G>
      </Svg>
    );
  }

