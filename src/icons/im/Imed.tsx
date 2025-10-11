

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imed = (props: IconProps) => {

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
          <Path  d="M9 11.5l1.5 1.5 5-5-5-5-1.5 1.5 3.5 3.5z" />
          <Path  d="M7 4.5l-1.5-1.5-5 5 5 5 1.5-1.5-3.5-3.5z" />
        </G>
      </Svg>
    );
  }

