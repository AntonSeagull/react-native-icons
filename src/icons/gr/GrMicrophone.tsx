

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrMicrophone = (props: IconProps) => {

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
          <Path  fill="none" d="M8,11 C8,14 9.790861,15 12,15 C14.209139,15 16,14 16,11 L16,5 C16,2 14.209139,1 12,1 C9.790861,1 8,2 8,5 L8,11 Z M4,9 L4,11 C4,16 7.581722,19 12,19 C16.418278,19 20,16 20,11 L20,9 M12,24 L12,19" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

