

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrFormPin = (props: IconProps) => {

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
          <Path  fill="none" d="m4 19 4.455-4.454M12.273 5 18 10.727m-4.454-4.454L9.727 10.09s-2.545-.636-4.454 1.273l6.363 6.363c1.91-1.909 1.273-4.454 1.273-4.454l3.818-3.818-3.181-3.182Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

