

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiScala = (props: IconProps) => {

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
          <Path  fill="#444444" d="M8.573 7.307c0 0 14.853-1.485 14.853-3.961v5.941c0 0 0 2.476-14.853 3.961zM8.636 15.229c0 0 14.853-1.485 14.853-3.961v5.941c0 0 0 2.476-14.853 3.961zM8.636 23.151c0 0 14.853-1.485 14.853-3.961v5.941c0 0 0 2.476-14.853 3.961z" />
        </G>
      </Svg>
    );
  }

