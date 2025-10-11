

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imcked2 = (props: IconProps) => {

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
          <Path  d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM5 7c-0.552 0-1-0.672-1-1.5s0.448-1.5 1-1.5 1 0.672 1 1.5-0.448 1.5-1 1.5zM8 13c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2zM11 7c-0.552 0-1-0.672-1-1.5s0.448-1.5 1-1.5 1 0.672 1 1.5-0.448 1.5-1 1.5z" />
        </G>
      </Svg>
    );
  }

