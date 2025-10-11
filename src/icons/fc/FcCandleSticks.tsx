

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcCandleSticks = (props: IconProps) => {

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
          <Path d="M36,7h6c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2V9C34,7.9,34.9,7,36,7z" fill="#4CAF50" />
          <Path d="M13,10h6c1.1,0,2,0.9,2,2v7c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2v-7C11,10.9,11.9,10,13,10z" fill="#4CAF50" />
          <Path d="M6,30h6c1.1,0,2,0.9,2,2v7c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2v-7C4,30.9,4.9,30,6,30z" fill="#F44336" />
          <Path d="M26,22h6c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2V24C24,22.9,24.9,22,26,22z" fill="#F44336" />
        </G>
      </Svg>
    );
  }

