

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiCoffee = (props: IconProps) => {

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
          <Line  x1="6" y1="1" x2="6" y2="4" />
          <Line  x1="10" y1="1" x2="10" y2="4" />
          <Line  x1="14" y1="1" x2="14" y2="4" />
          <Path  d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <Path  d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        </G>
      </Svg>
    );
  }

