

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandD3 = (props: IconProps) => {

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
          <Path  d="M3 4h1.8c3.976 0 7.2 3.582 7.2 8s-3.224 8 -7.2 8h-1.8" />
          <Path  d="M12 4h5.472c1.948 0 3.528 1.79 3.528 4s-1.58 4 -3.528 4" />
          <Path  d="M17.472 12h-2.472" />
          <Path  d="M17.472 12h-2.352" />
          <Path  d="M17.472 12c1.948 0 3.528 1.79 3.528 4s-1.58 4 -3.528 4h-5.472" />
        </G>
      </Svg>
    );
  }

