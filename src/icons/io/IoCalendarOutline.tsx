

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCalendarOutline = (props: IconProps) => {

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
          <Circle  cx="296" cy="232" r="24" />
          <Circle  cx="376" cy="232" r="24" />
          <Circle  cx="296" cy="312" r="24" />
          <Circle  cx="376" cy="312" r="24" />
          <Circle  cx="136" cy="312" r="24" />
          <Circle  cx="216" cy="312" r="24" />
          <Circle  cx="136" cy="392" r="24" />
          <Circle  cx="216" cy="392" r="24" />
          <Circle  cx="296" cy="392" r="24" />
          <Line  fill="none" x1="128" y1="48" x2="128" y2="80" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" />
          <Line  fill="none" x1="384" y1="48" x2="384" y2="80" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" />
          <Line  fill="none" x1="464" y1="160" x2="48" y2="160" strokeLinejoin="round" strokeWidth="32" />
        </G>
      </Svg>
    );
  }

