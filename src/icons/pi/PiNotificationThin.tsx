

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNotificationThin = (props: IconProps) => {

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
          <Path  d="M212,128v80a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V56A12,12,0,0,1,48,44h80a4,4,0,0,1,0,8H48a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V128a4,4,0,0,1,8,0Zm16-68a32,32,0,1,1-32-32A32,32,0,0,1,228,60Zm-8,0a24,24,0,1,0-24,24A24,24,0,0,0,220,60Z" />
        </G>
      </Svg>
    );
  }

