

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcSelfServiceKiosk = (props: IconProps) => {

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
          <Path d="M44,30H4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4V30z" fill="#546E7A" />
          <Path d="M40,27H8c-0.6,0-1-0.4-1-1V11c0-0.6,0.4-1,1-1h32c0.6,0,1,0.4,1,1v15C41,26.6,40.6,27,40,27z" fill="#64B5F6" />
          <Path d="M40,41H8c-2.2,0-4-1.8-4-4v-7h40v7C44,39.2,42.2,41,40,41z" fill="#78909C" />
          <Path d="M18,35c0,1.1-1.3,2-3,2s-3-0.9-3-2H18z" />
        </G>
      </Svg>
    );
  }

