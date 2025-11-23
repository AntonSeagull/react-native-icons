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

export const TbFreeRights = (props: IconProps) => {
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
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <Path d="M13.867 9.75c-.246-.48-.708-.769-1.2-.75h-1.334C10.597 9 10 9.67 10 10.5c0 .827.597 1.499 1.333 1.499h1.334c.736 0 1.333.671 1.333 1.5 0 .828-.597 1.499-1.333 1.499h-1.334c-.492.019-.954-.27-1.2-.75M12 7v2M12 15v2M6 6l1.5 1.5M16.5 16.5 18 18" />
      </G>
    </Svg>
  );
};