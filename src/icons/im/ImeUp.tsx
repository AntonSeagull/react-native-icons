

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImeUp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M11 8v6h1v-6h2.5l-3-3-3 3z" fill="#000000" />
          <Path d="M1 3h1.5v1h-1.5v-1z" fill="#000000" />
          <Path d="M3 3h1.5v1h-1.5v-1z" fill="#000000" />
          <Path d="M5 3h1v1.5h-1v-1.5z" fill="#000000" />
          <Path d="M1 6.5h1v1.5h-1v-1.5z" fill="#000000" />
          <Path d="M2.5 7h1.5v1h-1.5v-1z" fill="#000000" />
          <Path d="M4.5 7h1.5v1h-1.5v-1z" fill="#000000" />
          <Path d="M1 4.5h1v1.5h-1v-1.5z" fill="#000000" />
          <Path d="M5 5h1v1.5h-1v-1.5z" fill="#000000" />
          <Path d="M5 11v3h-3v-3h3zM6 10h-5v5h5v-5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

