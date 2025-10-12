

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imed2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 20 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 10, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M13 11.5l1.5 1.5 5-5-5-5-1.5 1.5 3.5 3.5z" />
          <Path  d="M7 4.5l-1.5-1.5-5 5 5 5 1.5-1.5-3.5-3.5z" />
          <Path  d="M10.958 2.352l1.085 0.296-3 11-1.085-0.296 3-11z" />
        </G>
      </Svg>
    );
  }

