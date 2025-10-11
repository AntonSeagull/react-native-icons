

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrScheduleNew = (props: IconProps) => {

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
          <Path  fill="none" d="M14,0 L14,3 M1,7 L19,7 M6,0 L6,3 M4,11 L6,11 M8,11 L16,11 M4,15 L6,15 M8,15 L14,15 M12,19 L1,19 L1,3 L19,3 L19,13 M19,15 L19,24 M15,17 L23,22 M23,17 L15,22" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

