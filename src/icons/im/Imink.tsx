

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imink = (props: IconProps) => {

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
          <Path  d="M9 7h6.5l-2.5-2.5 3-3-1.5-1.5-3 3-2.5-2.5z" />
          <Path  d="M9 9v6.5l2.5-2.5 3 3 1.5-1.5-3-3 2.5-2.5z" />
          <Path  d="M7 9h-6.5l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5z" />
          <Path  d="M7 7v-6.5l-2.5 2.5-3-3-1.5 1.5 3 3-2.5 2.5z" />
        </G>
      </Svg>
    );
  }

