

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imrary = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M16 15v-1h-1v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-3v-6h1v-1h-3v1h1v6h-1v1h-1v1h17v-1h-1z" fill="#000000" />
          <Path d="M8 0h1l8 5v1h-17v-1l8-5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

