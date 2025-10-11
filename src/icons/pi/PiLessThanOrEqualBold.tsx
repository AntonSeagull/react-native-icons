

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLessThanOrEqualBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M36,104a12,12,0,0,1,7.85-11.26l152-56a12,12,0,1,1,8.3,22.52L82.71,104l121.44,44.74A12,12,0,0,1,200,172a11.85,11.85,0,0,1-4.15-.74l-152-56A12,12,0,0,1,36,104Zm164,84H48a12,12,0,0,0,0,24H200a12,12,0,0,0,0-24Z" />
        </G>
      </Svg>
    );
  }

