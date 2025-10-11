

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDotDuotone = (props: IconProps) => {

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
          <Path d="M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z" />
          <Path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
        </G>
      </Svg>
    );
  }

