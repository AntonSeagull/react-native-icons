import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const FcVoicemail = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
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
      <G fill={fill} stroke={stroke}>
        <Path fill="#4CAF50" d="M48 24c0-6.1-4.9-11-11-11s-11 4.9-11 11c0 2.7.9 5.1 2.5 7h-9c1.6-1.9 2.5-4.3 2.5-7 0-6.1-4.9-11-11-11S0 17.9 0 24s4.9 11 11 11h27v-.1c5.6-.5 10-5.2 10-10.9M4 24c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7m33 7c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7" />
      </G>
    </Svg>
  );
};