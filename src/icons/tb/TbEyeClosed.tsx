

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEyeClosed = (props: IconProps) => {

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
          <Path  d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
          <Path  d="M3 15l2.5 -3.8" />
          <Path  d="M21 14.976l-2.492 -3.776" />
          <Path  d="M9 17l.5 -4" />
          <Path  d="M15 17l-.5 -4" />
        </G>
      </Svg>
    );
  }

