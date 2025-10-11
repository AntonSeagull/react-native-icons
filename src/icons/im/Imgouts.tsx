

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imgouts = (props: IconProps) => {

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
          <Path  d="M7.997 0c-3.816 0-6.909 3.094-6.909 6.909 0 3.616 3.294 6.547 6.909 6.547v2.544c4.197-2.128 6.916-5.556 6.916-9.091 0-3.816-3.1-6.909-6.916-6.909zM7 8c0 0.828-0.447 1.5-1 1.5v-1.5h-2v-3h3v3zM12 8c0 0.828-0.447 1.5-1 1.5v-1.5h-2v-3h3v3z" />
        </G>
      </Svg>
    );
  }

