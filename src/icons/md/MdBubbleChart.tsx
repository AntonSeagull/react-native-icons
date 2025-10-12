

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdBubbleChart = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Circle  cx="7.2" cy="14.4" r="3.2" />
          <Circle  cx="14.8" cy="18" r="2" />
          <Circle  cx="15.2" cy="8.8" r="4.8" />
          
        </G>
      </Svg>
    );
  }

