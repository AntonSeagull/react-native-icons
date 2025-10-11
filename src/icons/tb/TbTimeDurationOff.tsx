

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTimeDurationOff = (props: IconProps) => {

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
          <Path  d="M3 12v.01" />
          <Path  d="M7.5 19.8v.01" />
          <Path  d="M4.2 16.5v.01" />
          <Path  d="M4.2 7.5v.01" />
          <Path  d="M12 21a8.994 8.994 0 0 0 6.362 -2.634m1.685 -2.336a9 9 0 0 0 -8.047 -13.03" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

