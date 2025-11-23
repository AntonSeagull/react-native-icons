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

export const TiChartPie = (props: IconProps) => {
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
        <Path d="m11.614 13.98 4.908 4.922c.39.391.99.36 1.286-.106a9 9 0 0 0 1.393-4.815 9 9 0 0 0-1.972-5.631zM9 14.396V7.041a7.01 7.01 0 0 0-6 6.939C3 17.856 6.134 21 10 21a6.95 6.95 0 0 0 4.186-1.403zm7.331-8.183c.39-.391.365-.999-.089-1.313a10.9 10.9 0 0 0-4.251-1.765c-.544-.1-.991.312-.991.865v7.56z" />
      </G>
    </Svg>
  );
};