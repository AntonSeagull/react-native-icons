

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathMin = (props: IconProps) => {

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
          <Path  d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M3 13s1 -9 4 -9c2.48 0 5.643 9.565 8.36 12.883" />
          <Path  d="M18.748 17.038c.702 -.88 1.452 -3.56 2.252 -8.038" />
        </G>
      </Svg>
    );
  }

