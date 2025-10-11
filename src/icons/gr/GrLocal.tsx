

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrLocal = (props: IconProps) => {

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
          <Path  fill="none" d="M1,4 L23,4 L23,20 L1,20 L1,4 Z M11,8 L23,8 M1,16 L23,16 M1,12 L23,12 M11,4 L11,12" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

