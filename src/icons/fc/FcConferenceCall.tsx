

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcConferenceCall = (props: IconProps) => {

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
          <Circle  fill="#FFA726" cx="12" cy="21" r="5" />
          <Circle  fill="#FFB74D" cx="24" cy="17" r="6" />
          <Circle  fill="#FFA726" cx="36" cy="21" r="5" />
          <Circle  fill="#FFA726" cx="12" cy="21" r="5" />
          <Circle  fill="#FFA726" cx="36" cy="21" r="5" />
          <Path  fill="#607D8B" d="M36,34.1c0,0-3.3-7.5-12-7.5s-12,7.5-12,7.5V38h24V34.1z" />
          <Path  d="M2,34.7c0,0,2.8-6.3,10-6.3s10,6.3,10,6.3V38H2V34.7z" />
          <Path  d="M46,34.7c0,0-2.8-6.3-10-6.3s-10,6.3-10,6.3V38h20V34.7z" />
        </G>
      </Svg>
    );
  }

