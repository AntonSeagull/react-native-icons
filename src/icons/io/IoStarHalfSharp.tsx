

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoStarHalfSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M496,203.3H312.36L256,32,199.64,203.3H16L166.21,308.7,107.71,480,256,373.84,404.29,480,345.68,308.7ZM274.63,347.82,256,334.49V134.39l26,78.91,7.24,22H394.63l-67.32,47.2-19.69,13.81,7.78,22.75,26.26,76.75Z" />
        </G>
      </Svg>
    );
  }

