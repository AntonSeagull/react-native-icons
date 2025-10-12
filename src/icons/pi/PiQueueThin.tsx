

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiQueueThin = (props: IconProps) => {

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
          <Path  d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm100,60H40a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Zm0,64H40a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Zm108-28a4,4,0,0,1-1.88,3.39l-64,40A4,4,0,0,1,176,204a4.06,4.06,0,0,1-1.94-.5A4,4,0,0,1,172,200V120a4,4,0,0,1,6.12-3.39l64,40A4,4,0,0,1,244,160Zm-11.55,0L180,127.22v65.56Z" />
        </G>
      </Svg>
    );
  }

