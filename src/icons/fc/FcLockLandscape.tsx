

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcLockLandscape = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#37474F" d="M7,10h34c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H7c-2.2,0-4-1.8-4-4V14C3,11.8,4.8,10,7,10z" />
          <Path  fill="#BBDEFB" d="M42,34V14c0-0.6-0.4-1-1-1H7c-0.6,0-1,0.4-1,1v20c0,0.6,0.4,1,1,1h34C41.6,35,42,34.6,42,34z" />
          <Path  d="M29,31H19c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1v6C30,30.6,29.6,31,29,31z" />
          <Path  d="M24,17c-2.2,0-4,1.8-4,4v3h2v-3c0-1.1,0.9-2,2-2s2,0.9,2,2v3h2v-3C28,18.8,26.2,17,24,17z" />
        </G>
      </Svg>
    );
  }

