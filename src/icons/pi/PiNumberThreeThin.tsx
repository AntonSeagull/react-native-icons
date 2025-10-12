

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberThreeThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M172,160a52,52,0,0,1-86.67,38.76,4,4,0,1,1,5.34-6A44,44,0,1,0,120,116a4,4,0,0,1-3.2-6.4L160,52H88a4,4,0,0,1,0-8h80a4,4,0,0,1,3.2,6.4l-43.61,58.15A52.08,52.08,0,0,1,172,160Z" />
        </G>
      </Svg>
    );
  }

