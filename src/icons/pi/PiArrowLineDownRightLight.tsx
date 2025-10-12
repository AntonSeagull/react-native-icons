

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineDownRightLight = (props: IconProps) => {

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
          <Path  d="M222,40a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,40ZM192,98a6,6,0,0,0-6,6v81.52L84.24,83.76a6,6,0,0,0-8.48,8.48L177.52,194H96a6,6,0,0,0,0,12h96a6,6,0,0,0,6-6V104A6,6,0,0,0,192,98Z" />
        </G>
      </Svg>
    );
  }

