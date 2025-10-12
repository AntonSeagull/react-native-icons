

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrThreeD = (props: IconProps) => {

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
          <Path  fill="none" d="M2,5.5 L2,18.5 L12,22.5 L22,18.5 L22,5.5 L12,1.5 L2,5.5 Z M13,12 L18,12 L18,17 M2,5.5 L12,9.5 L22,5.5 M6,14 C6,14 12,20.5 18,12" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

