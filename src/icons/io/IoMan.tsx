

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMan = (props: IconProps) => {

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
          <Circle  cx="256" cy="56" r="56" />
          <Path  d="M304,128H208a64.19,64.19,0,0,0-64,64V299.52c0,10.85,8.43,20.08,19.27,20.47A20,20,0,0,0,184,300V200.27a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8V489a23,23,0,0,0,23,23h0a23,23,0,0,0,23-23V346.34A10.24,10.24,0,0,1,255.33,336,10,10,0,0,1,266,346V489a23,23,0,0,0,23,23h0a23,23,0,0,0,23-23V200.27a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v99.52c0,10.85,8.43,20.08,19.27,20.47A20,20,0,0,0,368,300V192A64.19,64.19,0,0,0,304,128Z" />
        </G>
      </Svg>
    );
  }

