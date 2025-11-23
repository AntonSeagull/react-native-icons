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

export const CiIndent = (props: IconProps) => {
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
        <Path d="M20.437 4.064H3.563a.5.5 0 0 1 0-1h16.874a.5.5 0 0 1 0 1M20.437 9.688h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1M20.437 15.312h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1M20.437 20.936H3.563a.5.5 0 1 1 0-1h16.874a.5.5 0 1 1 0 1M7.91 11.65a.49.49 0 0 1 0 .7l-2 2a.495.495 0 0 1-.7-.7l1.15-1.15H3.54a.5.5 0 0 1 0-1h2.81c-.38-.38-.76-.76-1.14-1.15a.495.495 0 0 1 .7-.7Z" />
      </G>
    </Svg>
  );
};