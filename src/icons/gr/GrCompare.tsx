

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCompare = (props: IconProps) => {

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
          <Path  fill="none" d="M11,7 L1,7 L1,17 L7,17 L7,8 M10.9997,5 L10.9997,9 L12.9997,7 L10.9997,5 Z M10.9999,16.99965 L12.9999,18.9994 L12.9999,14.9994 L10.9999,16.99965 Z M13,17 L23,17 L23,7 L17,7 L17,16" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

