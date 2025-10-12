

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiUpload = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M17 16v1h-17v-1h17zM7.999 1.708v11.292h1v-11.294l3.647 3.647 0.707-0.707-4.853-4.853-4.854 4.853 0.707 0.707 3.646-3.645z" />
        </G>
      </Svg>
    );
  }

