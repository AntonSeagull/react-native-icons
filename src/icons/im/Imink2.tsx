

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imink2 = (props: IconProps) => {

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
          <Path  d="M7 9v6.5l-2.5-2.5-3 3-1.5-1.5 3-3-2.5-2.5zM16 1.5l-3 3 2.5 2.5h-6.5v-6.5l2.5 2.5 3-3z" />
        </G>
      </Svg>
    );
  }

