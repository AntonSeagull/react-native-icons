

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDuplicate = (props: IconProps) => {

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
          <Path  fill="none" d="M4.5,17 L1,17 L1,1 L1,1 L17,1 L17,4.5 M7,7 L23,7 L23,23 L7,23 L7,7 Z M15,11 L15,19 L15,11 Z M11,15 L19,15 L11,15 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

