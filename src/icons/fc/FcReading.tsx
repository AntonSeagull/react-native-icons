

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcReading = (props: IconProps) => {

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
          <Path  fill="#5C6BC0" d="M40,40c-6.9,0-16,4-16,4V22c0,0,9-4,18-4L40,40z" />
          <Path  fill="#7986CB" d="M8,40c6.9,0,16,4,16,4V22c0,0-9-4-18-4L8,40z" />
          <Circle  cx="24" cy="12" r="8" />
          <Path  d="M41,32h1c0.6,0,1-0.4,1-1v-4c0-0.6-0.4-1-1-1h-1c-1.7,0-3,1.3-3,3v0C38,30.7,39.3,32,41,32z" />
          <Path  d="M7,26H6c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h1c1.7,0,3-1.3,3-3v0C10,27.3,8.7,26,7,26z" />
        </G>
      </Svg>
    );
  }

