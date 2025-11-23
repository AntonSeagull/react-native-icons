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

export const TbReceiptOff = (props: IconProps) => {
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
        <Path d="M5 21V5m2-2h10a2 2 0 0 1 2 2v10m0 4.01V21l-3-2-2 2-2-2-2 2-2-2-3 2M11 7h4M9 11h2M13 15h2M15 11v.01M3 3l18 18" />
      </G>
    </Svg>
  );
};