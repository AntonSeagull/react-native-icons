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

export const PiRewindCircleFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56 140a8 8 0 0 1-12.8 6.4l-48-36a8 8 0 0 1-3.2-6.4v36a8 8 0 0 1-12.8 6.4l-48-36a8 8 0 0 1 0-12.8l48-36A8 8 0 0 1 120 92v36a8 8 0 0 1 3.2-6.4l48-36A8 8 0 0 1 184 92Z" />
      </G>
    </Svg>
  );
};