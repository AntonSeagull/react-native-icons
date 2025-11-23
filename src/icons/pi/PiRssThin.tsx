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

export const PiRssThin = (props: IconProps) => {
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
        <Path d="M104.08 151.92A67.52 67.52 0 0 1 124 200a4 4 0 0 1-8 0 60 60 0 0 0-60-60 4 4 0 0 1 0-8 67.52 67.52 0 0 1 48.08 19.92M56 84a4 4 0 0 0 0 8 108 108 0 0 1 108 108 4 4 0 0 0 8 0A116 116 0 0 0 56 84m116 0A162.92 162.92 0 0 0 56 36a4 4 0 0 0 0 8 155 155 0 0 1 110.31 45.69A155 155 0 0 1 212 200a4 4 0 0 0 8 0 162.92 162.92 0 0 0-48-116M60 188a8 8 0 1 0 8 8 8 8 0 0 0-8-8" />
      </G>
    </Svg>
  );
};