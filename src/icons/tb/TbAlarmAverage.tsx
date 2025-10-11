

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAlarmAverage = (props: IconProps) => {

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
          <Path  d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0" />
          <Path  d="M7 4l-2.75 2" />
          <Path  d="M17 4l2.75 2" />
          <Path  d="M8 13h1l2 3l2 -6l2 3h1" />
        </G>
      </Svg>
    );
  }

