

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imabase = (props: IconProps) => {

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
          <Path  d="M8 0c-4.418 0-8 1.119-8 2.5v2c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5v-2c0-1.381-3.582-2.5-8-2.5z" />
          <Path  d="M8 8.5c-4.418 0-8-1.119-8-2.5v3c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5v-3c0 1.381-3.582 2.5-8 2.5z" />
          <Path  d="M8 13c-4.418 0-8-1.119-8-2.5v3c0 1.381 3.582 2.5 8 2.5s8-1.119 8-2.5v-3c0 1.381-3.582 2.5-8 2.5z" />
        </G>
      </Svg>
    );
  }

