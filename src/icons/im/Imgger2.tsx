

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imgger2 = (props: IconProps) => {

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
          <Path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM14 10.125c0 2.141-1.741 3.875-3.897 3.875h-4.2c-2.156 0-3.903-1.734-3.903-3.875v-4.25c0-2.141 1.747-3.875 3.903-3.875h1.966c2.156 0 3.881 1.609 3.881 3.75 0.028 0.4 0.391 0.75 0.8 0.75h0.672c0.431 0 0.775 0.453 0.775 0.881v2.744z" fill="#000000" />
          <Path d="M11 10c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1v0c0-0.55 0.45-1 1-1h4c0.55 0 1 0.45 1 1v0z" fill="#000000" />
          <Path d="M9 6c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v0c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v0z" fill="#000000" />
        </G>
      </Svg>
    );
  }

