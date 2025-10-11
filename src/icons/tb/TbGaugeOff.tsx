

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGaugeOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M20.038 16.052a9 9 0 0 0 -12.067 -12.102m-2.333 1.686a9 9 0 1 0 12.73 12.726" />
          <Path d="M11.283 11.303a1 1 0 0 0 1.419 1.41" />
          <Path d="M14 10l2 -2" />
          <Path d="M7 12c0 -1.386 .564 -2.64 1.475 -3.546m2.619 -1.372c.294 -.054 .597 -.082 .906 -.082" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

