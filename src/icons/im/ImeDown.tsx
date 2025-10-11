

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImeDown = (props: IconProps) => {

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
          <Path  d="M12 11v-6h-1v6h-2.5l3 3 3-3z" />
          <Path  d="M5 4v3h-3v-3h3zM6 3h-5v5h5v-5z" />
          <Path  d="M1 10h1.5v1h-1.5v-1z" />
          <Path  d="M3 10h1.5v1h-1.5v-1z" />
          <Path  d="M5 10h1v1.5h-1v-1.5z" />
          <Path  d="M1 13.5h1v1.5h-1v-1.5z" />
          <Path  d="M2.5 14h1.5v1h-1.5v-1z" />
          <Path  d="M4.5 14h1.5v1h-1.5v-1z" />
          <Path  d="M1 11.5h1v1.5h-1v-1.5z" />
          <Path  d="M5 12h1v1.5h-1v-1.5z" />
        </G>
      </Svg>
    );
  }

