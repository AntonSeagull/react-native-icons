

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imckr2 = (props: IconProps) => {

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
          <Path  d="M12.5 6.5c-1.103 0-2 0.897-2 2s0.897 2 2 2c1.103 0 2-0.897 2-2s-0.897-2-2-2zM12.5 5v0c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5c0-1.933 1.567-3.5 3.5-3.5zM0 8.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5z" />
        </G>
      </Svg>
    );
  }

