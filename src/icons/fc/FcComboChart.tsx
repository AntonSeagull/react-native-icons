

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcComboChart = (props: IconProps) => {

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
          <Circle  cx="8" cy="16" r="3" />
          <Circle  cx="16" cy="18" r="3" />
          <Circle  cx="24" cy="11" r="3" />
          <Circle  cx="32" cy="13" r="3" />
          <Circle  cx="40" cy="9" r="3" />
        </G>
      </Svg>
    );
  }

