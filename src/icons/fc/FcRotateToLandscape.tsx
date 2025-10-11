

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcRotateToLandscape = (props: IconProps) => {

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
          <Path d="M10,41V7c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H14C11.8,45,10,43.2,10,41z" fill="#37474F" />
          <Path d="M34,6H14c-0.6,0-1,0.4-1,1v34c0,0.6,0.4,1,1,1h20c0.6,0,1-0.4,1-1V7C35,6.4,34.6,6,34,6z" fill="#F3E5F5" />
          <Path d="M26,16c-3.3,0-6,2.7-6,6v6h4v-6c0-1.1,0.9-2,2-2s2,0.9,2,2v2h4v-2C32,18.7,29.3,16,26,16z" fill="#9C27B0" />
        </G>
      </Svg>
    );
  }

