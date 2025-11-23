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

export const BiMemoryCard = (props: IconProps) => {
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
        <Path d="M4 4v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V8a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 14 2H6c-1.103 0-2 .897-2 2m14 4.414L18.001 20H6V4h7.586z" />
        <Path d="M8 6h2v4H8zm4 0h2v4h-2z" />
      </G>
    </Svg>
  );
};