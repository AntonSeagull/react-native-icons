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

export const CiTextAlignCenter = (props: IconProps) => {
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
        <Path d="M20.437 4.063H3.563a.5.5 0 1 1 0-1h16.874a.5.5 0 1 1 0 1M16.5 8.5h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1M16.5 16.5h-9a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1M20.437 12.5H3.563a.5.5 0 0 1 0-1h16.874a.5.5 0 0 1 0 1M20.437 20.937H3.563a.5.5 0 1 1 0-1h16.874a.5.5 0 0 1 0 1" />
      </G>
    </Svg>
  );
};