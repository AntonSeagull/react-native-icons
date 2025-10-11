

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imcked = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM6 11c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM10 5.5c0-0.828 0.448-1.5 1-1.5s1 0.672 1 1.5c0 0.828-0.448 1.5-1 1.5s-1-0.672-1-1.5zM4 5.5c0-0.828 0.448-1.5 1-1.5s1 0.672 1 1.5c0 0.828-0.448 1.5-1 1.5s-1-0.672-1-1.5z" />
        </G>
      </Svg>
    );
  }

