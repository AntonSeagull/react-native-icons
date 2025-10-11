

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcLockPortrait = (props: IconProps) => {

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
          <Path d="M34,6H14c-0.6,0-1,0.4-1,1v34c0,0.6,0.4,1,1,1h20c0.6,0,1-0.4,1-1V7C35,6.4,34.6,6,34,6z" fill="#BBDEFB" />
          <Path d="M29,30H19c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1v6C30,29.6,29.6,30,29,30z" />
          <Path d="M24,16c-2.2,0-4,1.8-4,4v3h2v-3c0-1.1,0.9-2,2-2s2,0.9,2,2v3h2v-3C28,17.8,26.2,16,24,16z" />
        </G>
      </Svg>
    );
  }

