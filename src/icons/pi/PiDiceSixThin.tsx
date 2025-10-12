

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDiceSixThin = (props: IconProps) => {

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
          <Path  d="M192,36H64A28,28,0,0,0,36,64V192a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V64A28,28,0,0,0,192,36Zm20,156a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H192a20,20,0,0,1,20,20ZM100,84a8,8,0,1,1-8-8A8,8,0,0,1,100,84Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,84Zm-72,44a8,8,0,1,1-8-8A8,8,0,0,1,100,128Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,128Zm-72,44a8,8,0,1,1-8-8A8,8,0,0,1,100,172Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,172Z" />
        </G>
      </Svg>
    );
  }

