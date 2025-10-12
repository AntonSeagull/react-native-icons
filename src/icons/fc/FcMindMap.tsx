

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcMindMap = (props: IconProps) => {

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
          <Circle  fill="#3F51B5" cx="24" cy="24" r="7" />
          <Circle  cx="24" cy="8" r="5" />
          <Circle  cx="39" cy="21" r="5" />
          <Circle  cx="7" cy="13" r="5" />
          <Circle  cx="11" cy="41" r="5" />
          <Circle  cx="34" cy="39" r="5" />
        </G>
      </Svg>
    );
  }

