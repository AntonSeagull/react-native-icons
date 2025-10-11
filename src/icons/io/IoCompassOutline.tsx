

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCompassOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M350.67,150.93l-117.2,46.88a64,64,0,0,0-35.66,35.66l-46.88,117.2a8,8,0,0,0,10.4,10.4l117.2-46.88a64,64,0,0,0,35.66-35.66l46.88-117.2A8,8,0,0,0,350.67,150.93ZM256,280a24,24,0,1,1,24-24A24,24,0,0,1,256,280Z" />
        </G>
      </Svg>
    );
  }

