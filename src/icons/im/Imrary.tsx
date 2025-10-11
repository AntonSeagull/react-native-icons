

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imrary = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M16 15v-1h-1v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-1v1h-1v1h17v-1h-1z" />
          <Path  d="M8 0h1l8 5v1h-17v-1l8-5z" />
        </G>
      </Svg>
    );
  }

