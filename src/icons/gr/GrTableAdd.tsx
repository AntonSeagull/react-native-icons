

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrTableAdd = (props: IconProps) => {

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
          <Path  fill="none" d="M8,5 L8,23 M16,5 L16,11 M1,11 L17,11 M1,5 L23,5 M1,17 L11,17 M17,23 L1,23 L1,1 L23,1 L23,17 M17,23 C20.3137085,23 23,20.3137085 23,17 C23,13.6862915 20.3137085,11 17,11 C13.6862915,11 11,13.6862915 11,17 C11,20.3137085 13.6862915,23 17,23 Z M17,14 L17,20 M17,14 L17,20 M14,17 L20,17" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

