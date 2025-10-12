

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidHappyHeartEyes = (props: IconProps) => {

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
          <Path  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM6.435 8.467A1.49 1.49 0 0 1 8.502 8.4a1.49 1.49 0 0 1 2.065.033c.597.592.604 1.521.018 2.118l-2.05 2.083-2.082-2.05a1.484 1.484 0 0 1-.018-2.117zM12 18c-4 0-5-4-5-4h10s-1 4-5 4zm5.585-7.449-2.05 2.083-2.082-2.05a1.485 1.485 0 0 1-.019-2.117 1.49 1.49 0 0 1 2.068-.067 1.49 1.49 0 0 1 2.065.033c.597.591.605 1.521.018 2.118z" />
        </G>
      </Svg>
    );
  }

