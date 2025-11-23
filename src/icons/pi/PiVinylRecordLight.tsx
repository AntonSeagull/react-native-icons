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

export const PiVinylRecordLight = (props: IconProps) => {
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
        <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m0-148a58.07 58.07 0 0 0-58 58 6 6 0 0 1-12 0 70.08 70.08 0 0 1 70-70 6 6 0 0 1 0 12m70 58a70.08 70.08 0 0 1-70 70 6 6 0 0 1 0-12 58.07 58.07 0 0 0 58-58 6 6 0 0 1 12 0m-40 0a30 30 0 1 0-30 30 30 30 0 0 0 30-30m-48 0a18 18 0 1 1 18 18 18 18 0 0 1-18-18" />
      </G>
    </Svg>
  );
};