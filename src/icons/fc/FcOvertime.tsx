

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcOvertime = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12,40V20h32v20c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z" fill="#CFD8DC" />
          <Path d="M44,16v6H12v-6c0-2.2,1.8-4,4-4h24C42.2,12,44,13.8,44,16z" fill="#78909C" />
          <Path d="M37,10c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2s2-0.9,2-2v-4C39,10.9,38.1,10,37,10z" />
          <Path d="M20,10c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2s2-0.9,2-2v-4C22,10.9,21.1,10,20,10z" />
        </G>
      </Svg>
    );
  }

