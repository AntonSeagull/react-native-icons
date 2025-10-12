

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowIteration = (props: IconProps) => {

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
          <Path  d="M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5" />
          <Path  d="M3 16h18" />
          <Path  d="M18 13l3 3l-3 3" />
        </G>
      </Svg>
    );
  }

