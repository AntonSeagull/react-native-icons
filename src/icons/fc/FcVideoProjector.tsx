

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcVideoProjector = (props: IconProps) => {

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
          <Path d="M44,35H4c-2.2,0-4-1.8-4-4V17c0-2.2,1.8-4,4-4h40c2.2,0,4,1.8,4,4v14C48,33.2,46.2,35,44,35z" fill="#78909C" />
          <Path d="M40.7,21.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1 c1.2-1.3,3.3-1.3,4.5,0c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C41.1,22.7,41.1,22.1,40.7,21.7z" fill="#EA80FC" />
        </G>
      </Svg>
    );
  }

