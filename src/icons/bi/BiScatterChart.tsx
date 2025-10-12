

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiScatterChart = (props: IconProps) => {

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
          <Circle  cx="10" cy="8" r="2" />
          <Circle  cx="18" cy="12" r="2" />
          <Circle  cx="11.5" cy="13.5" r="1.5" />
          <Circle  cx="16.5" cy="6.5" r="1.5" />
          <Path  d="M4 21h17v-2H5V3H3v17a1 1 0 0 0 1 1z" />
        </G>
      </Svg>
    );
  }

