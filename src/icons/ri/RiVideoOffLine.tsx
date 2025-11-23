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

export const RiVideoOffLine = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
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
      <G fill={fill} stroke={stroke}>
        <Path d="m17 18.414 4.192 4.193 1.415-1.415-19.8-19.799-1.414 1.415L2.586 4H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-2-2V18H3V6h1.586zm8 1.626a.5.5 0 0 1-.292.454L21 16.786V8.841l-4 2.8v1.145l-2-2V6h-4.786l-2-2H16a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41z" />
      </G>
    </Svg>
  );
};