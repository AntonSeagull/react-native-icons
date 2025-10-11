

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrBundle = (props: IconProps) => {

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
          <Path  fill="none" d="M17,14 L7,14 L17,14 Z M17,3 L23,3 L23,13 L17,13 M1,13 L1,17 L7,17 M17,17 L23,17 L23,13 M1,17 L1,21 L7,21 M23,17 L23,21 L17,21 M7,22 L17,22 L17,2 L7,2 L7,22 Z M7,13 L1,13 L1,3 L7,3" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

