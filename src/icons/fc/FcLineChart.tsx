

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcLineChart = (props: IconProps) => {

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
          <Circle  cx="8" cy="38" r="3" />
          <Circle  cx="16" cy="40" r="3" />
          <Circle  cx="24" cy="33" r="3" />
          <Circle  cx="32" cy="35" r="3" />
          <Circle  cx="40" cy="31" r="3" />
          <Circle  cx="8" cy="20" r="3" />
          <Circle  cx="16" cy="22" r="3" />
          <Circle  cx="24" cy="15" r="3" />
          <Circle  cx="32" cy="20" r="3" />
          <Circle  cx="40" cy="8" r="3" />
          <Path  d="M38.3,6.9c-2.1,3.2-5.3,8-6.9,10.4c-1.2-0.7-3.1-2-6.4-4l-1.3-0.8l-8.3,7.3l-7-1.7l-1,3.9l9,2.3l7.7-6.7 c2.6,1.6,5.8,3.6,6.5,4.1l0.5,0.5l0.9-0.1c1.1-0.1,1.1-0.1,9.5-12.9L38.3,6.9z" />
        </G>
      </Svg>
    );
  }

