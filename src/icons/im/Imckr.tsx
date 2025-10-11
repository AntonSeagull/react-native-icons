

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imckr = (props: IconProps) => {

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
          <Path d="M0 8.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5zM9 8.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

