

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiUv = (props: IconProps) => {

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
          <Path  d="m0 .1058.0504 11.9496.0403 9.5597c.0055 1.3199 1.08 2.3854 2.4 2.3798l9.5596-.0403 5.9749-.0252.6075-.0026c1.316-.0056 2.3799-1.0963 2.3799-2.4123h1.0946v2.3894L24 23.9042 23.8992.005 12.9056.0513l.0463 9.5245v5.9637h-1.9583L11.04 9.584 10.9936.0594Z" />
        </G>
      </Svg>
    );
  }

