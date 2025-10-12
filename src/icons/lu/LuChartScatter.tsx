

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuChartScatter = (props: IconProps) => {

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
          <Circle  cx="7.5" cy="7.5" r=".5" fill="currentColor" />
          <Circle  cx="18.5" cy="5.5" r=".5" fill="currentColor" />
          <Circle  cx="11.5" cy="11.5" r=".5" fill="currentColor" />
          <Circle  cx="7.5" cy="16.5" r=".5" fill="currentColor" />
          <Circle  cx="17.5" cy="14.5" r=".5" fill="currentColor" />
          <Path  d="M3 3v16a2 2 0 0 0 2 2h16" />
        </G>
      </Svg>
    );
  }

