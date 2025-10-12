

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrFormCalendar = (props: IconProps) => {

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
          <Path  fill="none" d="M6,19 L18,19 L18,8 L6,8 L6,19 Z M15,8 L15,5 L15,8 Z M9,8 L9,5 L9,8 Z M6,11.5 L18,11.5 L6,11.5 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

