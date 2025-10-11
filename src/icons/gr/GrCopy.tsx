

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCopy = (props: IconProps) => {

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
          <Path  fill="none" d="M9,15 L17,15 L9,15 Z M9,11 L19,11 L9,11 Z M9,7 L13,7 L9,7 Z M16,1 L16,7 L22,7 M6,5 L2,5 L2,23 L18,23 L18,19 M22,19 L6,19 L6,1 L17,1 L22,6 L22,19 L22,19 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

