

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiStackSimpleBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M10.05,110.42l112,64a12,12,0,0,0,11.9,0l112-64a12,12,0,0,0,0-20.84l-112-64a12,12,0,0,0-11.9,0l-112,64a12,12,0,0,0,0,20.84Zm118-60.6L215.81,100,128,150.18,40.19,100Zm122.42,92.23A12,12,0,0,1,246,158.42l-112,64a12,12,0,0,1-11.9,0l-112-64A12,12,0,1,1,22,137.58l106,60.6,106-60.6A12,12,0,0,1,250.42,142.05Z" />
        </G>
      </Svg>
    );
  }

