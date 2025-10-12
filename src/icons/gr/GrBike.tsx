

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrBike = (props: IconProps) => {

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
          <Path  fill="none" d="M5,19 C7.209139,19 9,17.209139 9,15 C9,12.790861 7.209139,11 5,11 C2.790861,11 1,12.790861 1,15 C1,17.209139 2.790861,19 5,19 Z M19,19 C21.209139,19 23,17.209139 23,15 C23,12.790861 21.209139,11 19,11 C16.790861,11 15,12.790861 15,15 C15,17.209139 16.790861,19 19,19 Z M5,6 L10,6 M19,15 L16,5 L13,5 M9,9 L5,15 L12,15 C12,12 14,9 17,9 L16,9 L9,9 Z M9,9 L7,6" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

