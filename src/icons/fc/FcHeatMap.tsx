

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcHeatMap = (props: IconProps) => {

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
          <Circle  cx="14" cy="11" r="2" />
          <Circle  cx="32" cy="11" r="2" />
          <Circle  cx="39" cy="11" r="2" />
          <Circle  cx="23" cy="11" r="4" />
          <Circle  cx="14" cy="33" r="2" />
          <Circle  cx="30" cy="33" r="2" />
          <Circle  cx="22" cy="33" r="3" />
          <Circle  cx="38" cy="33" r="4" />
          <Circle  cx="14" cy="22" r="2" />
          <Circle  cx="39" cy="22" r="2" />
          <Circle  cx="32" cy="22" r="3" />
        </G>
      </Svg>
    );
  }

