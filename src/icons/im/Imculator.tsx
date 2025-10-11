

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imculator = (props: IconProps) => {

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
          <Path d="M6 1h-5c-0.55 0-1 0.45-1 1v5c0 0.55 0.45 1 1 1h5c0.55 0 1-0.45 1-1v-5c0-0.55-0.45-1-1-1zM6 5h-5v-1h5v1zM14 1h-5c-0.55 0-1 0.45-1 1v13c0 0.55 0.45 1 1 1h5c0.55 0 1-0.45 1-1v-13c0-0.55-0.45-1-1-1zM14 10h-5v-1h5v1zM14 7h-5v-1h5v1zM6 9h-5c-0.55 0-1 0.45-1 1v5c0 0.55 0.45 1 1 1h5c0.55 0 1-0.45 1-1v-5c0-0.55-0.45-1-1-1zM6 13h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

