

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaBatteryQuarterSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 3 8 L 3 24 L 27 24 L 27 19 L 29 19 L 29 13 L 27 13 L 27 8 Z M 5 10 L 25 10 L 25 22 L 5 22 Z M 7 12 L 7 20 L 11 20 L 11 12 Z" />
        </G>
      </Svg>
    );
  }

