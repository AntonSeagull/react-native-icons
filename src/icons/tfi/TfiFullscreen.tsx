

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiFullscreen = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M15.996 11.352l0.004 4.648-4.649-0.004 0.001-1 2.94 0.003-5.792-5.791-5.792 5.792 2.94-0.003 0.001 1-4.649 0.003 0.004-4.649 1 0.001-0.003 2.939 5.792-5.791-5.792-5.792 0.003 2.939-1 0.001-0.004-4.648 4.649 0.004-0.001 1-2.94-0.003 5.792 5.792 5.792-5.792-2.94 0.003-0.001-1 4.649-0.004-0.004 4.649-1-0.001 0.003-2.939-5.792 5.791 5.792 5.792-0.003-2.939 1-0.001z" />
        </G>
      </Svg>
    );
  }

