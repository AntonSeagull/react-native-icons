

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcPodiumWithAudience = (props: IconProps) => {

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
          <Circle  fill="#FFB74D" cx="24" cy="28" r="4" />
          <Circle  fill="#FFB74D" cx="36" cy="28" r="4" />
          <Circle  fill="#FFB74D" cx="12" cy="28" r="4" />
          <Circle  fill="#FFB74D" cx="18" cy="37" r="5" />
          <Circle  fill="#FFB74D" cx="30" cy="37" r="5" />
        </G>
      </Svg>
    );
  }

