

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcClock = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Circle  fill="#00ACC1" cx="24" cy="24" r="20" />
          <Circle  fill="#eee" cx="24" cy="24" r="16" />
          <Circle  cx="24" cy="24" r="2" />
          <Circle  fill="#00ACC1" cx="24" cy="24" r="1" />
        </G>
      </Svg>
    );
  }

