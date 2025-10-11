

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCloudComputer = (props: IconProps) => {

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
          <Path  fill="none" d="M6,6 L6,5 C6,2 7.5,1 10,1 L14,1 C16.5,1 18,2.5 18,5 L18,6 C21,6 23,8 23,11 C23,14 21,16 18,16 M14,6 L6,6 C3,6 1,7.5 1,11 C1,14.5 3,16 6,16 M8,19 L16,19 L16,12 L8,12 L8,19 Z M12,19 L12,23 L12,19 Z M9,23 L15,23 L9,23 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

