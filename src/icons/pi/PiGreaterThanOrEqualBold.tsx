

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGreaterThanOrEqualBold = (props: IconProps) => {

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
          <Path  d="M51.85,148.74,173.29,104,51.85,59.26a12,12,0,0,1,8.3-22.52l152,56a12,12,0,0,1,0,22.52l-152,56a12,12,0,1,1-8.3-22.52ZM208,188H56a12,12,0,0,0,0,24H208a12,12,0,0,0,0-24Z" />
        </G>
      </Svg>
    );
  }

