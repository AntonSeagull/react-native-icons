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

export const TbBooksOff = (props: IconProps) => {
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
        <Path d="M9 9v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5M8 4a1 1 0 0 1 1 1M9 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4M13 13v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9M5 8h3M9 16h4" />
        <Path d="M14.254 10.244 13.036 5.82a1.02 1.02 0 0 1 .634-1.219l.133-.041 2.184-.53c.562-.135 1.133.19 1.282.732l3.236 11.75M19.585 19.589l-1.572.38c-.562.136-1.133-.19-1.282-.731l-.952-3.458M14 9l4-1M19.207 15.199l.716-.18M3 3l18 18" />
      </G>
    </Svg>
  );
};