

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuChartNetwork = (props: IconProps) => {

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
          <Circle  cx="12" cy="6" r="2" />
          <Circle  cx="16" cy="12" r="2" />
          <Circle  cx="9" cy="15" r="2" />
          <Path  d="m13.11 7.664 1.78 2.672" />
          <Path  d="m14.162 12.788-3.324 1.424" />
          <Path  d="m20 4-6.06 1.515" />
          <Path  d="M3 3v16a2 2 0 0 0 2 2h16" />
        </G>
      </Svg>
    );
  }

