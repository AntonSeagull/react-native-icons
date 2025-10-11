

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoVolumeHighSharp = (props: IconProps) => {

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
          <Path d="M320,320c9.74-19.38,16-40.84,16-64,0-23.48-6-44.42-16-64" />
          <Path d="M368,368c19.48-33.92,32-64.06,32-112s-12-77.74-32-112" />
          <Path d="M416,416c30-46,48-91.43,48-160S446,143,416,96" />
        </G>
      </Svg>
    );
  }

