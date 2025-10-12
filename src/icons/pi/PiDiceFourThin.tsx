

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDiceFourThin = (props: IconProps) => {

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
          <Path  d="M192,36H64A28,28,0,0,0,36,64V192a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V64A28,28,0,0,0,192,36Zm20,156a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H192a20,20,0,0,1,20,20ZM108,100a8,8,0,1,1-8-8A8,8,0,0,1,108,100Zm56,0a8,8,0,1,1-8-8A8,8,0,0,1,164,100Zm-56,56a8,8,0,1,1-8-8A8,8,0,0,1,108,156Zm56,0a8,8,0,1,1-8-8A8,8,0,0,1,164,156Z" />
        </G>
      </Svg>
    );
  }

