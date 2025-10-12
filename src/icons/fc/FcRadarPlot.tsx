

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcRadarPlot = (props: IconProps) => {

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
          <Path  fill="#CFD8DC" d="M38.4,13L24.1,6.4L4.6,12.1l8.8,13.2l-2.2,15.1h22.7l6.6-13.3L38.4,13z M32.1,37.5H14.7l1.8-12.9L9.4,13.9 l14.5-4.3L35.6,15l1.8,11.7L32.1,37.5z" />
          <Circle  cx="24" cy="8" r="4" />
          <Circle  cx="37" cy="14" r="4" />
          <Circle  cx="39" cy="27" r="4" />
          <Circle  cx="7" cy="13" r="4" />
          <Circle  cx="13" cy="39" r="4" />
          <Circle  cx="15" cy="25" r="4" />
          <Circle  cx="33" cy="39" r="4" />
        </G>
      </Svg>
    );
  }

