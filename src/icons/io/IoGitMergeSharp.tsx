

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGitMergeSharp = (props: IconProps) => {

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
          <Path  d="M384,224a63.66,63.66,0,0,0-37.95,12.5L160,153.36v-2a64,64,0,1,0-64,0V360.61a64,64,0,1,0,64,0V223.46l160.41,71.69A64,64,0,1,0,384,224ZM128,64A32,32,0,1,1,96,96,32,32,0,0,1,128,64Zm0,384a32,32,0,1,1,32-32A32,32,0,0,1,128,448ZM384,320a32,32,0,1,1,32-32A32,32,0,0,1,384,320Z" />
        </G>
      </Svg>
    );
  }

