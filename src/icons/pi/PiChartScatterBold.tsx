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

export const PiChartScatterBold = (props: IconProps) => {
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
        <Path d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v148h180a12 12 0 0 1 12 12m-120-60a16 16 0 1 0 16-16 16 16 0 0 0-16 16m-8-40a16 16 0 1 0-16-16 16 16 0 0 0 16 16m-32 72a16 16 0 1 0-16-16 16 16 0 0 0 16 16m96-48a16 16 0 1 0-16-16 16 16 0 0 0 16 16m24-40a16 16 0 1 0-16-16 16 16 0 0 0 16 16m-24 72a16 16 0 1 0 16-16 16 16 0 0 0-16 16" />
      </G>
    </Svg>
  );
};