

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiFiles = (props: IconProps) => {

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
          <Path  d="M12.497 0h-6.497v2.010h1v-1.010h5v4h4v8h-4.017v1h5.017v-9.818l-4.503-4.182zM13 1.832l2.335 2.168h-2.335v-2.168zM0 3v14h11v-9.818l-4.503-4.182h-6.497zM7 4.832l2.335 2.168h-2.335v-2.168zM1 16v-12h5v4h4v8h-9z" />
        </G>
      </Svg>
    );
  }

