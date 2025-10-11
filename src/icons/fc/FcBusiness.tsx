

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcBusiness = (props: IconProps) => {

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
          <Path d="M27,7h-6c-1.7,0-3,1.3-3,3v3h2v-3c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v3h2v-3C30,8.3,28.7,7,27,7z" fill="#37474F" />
          <Path d="M40,43H8c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,41.2,42.2,43,40,43z" fill="#78909C" />
          <Path d="M11,44H9c-0.6,0-1-0.4-1-1v-2h4v2C12,43.6,11.6,44,11,44z" />
          <Path d="M39,44h-2c-0.6,0-1-0.4-1-1v-2h4v2C40,43.6,39.6,44,39,44z" />
        </G>
      </Svg>
    );
  }

