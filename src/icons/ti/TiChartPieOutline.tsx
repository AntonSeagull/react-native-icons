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

export const TiChartPieOutline = (props: IconProps) => {
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
        <Path d="m18.227 7.609.557-.559a2 2 0 0 0-.135-2.947 13.5 13.5 0 0 0-7.469-3.097L11 1a2 2 0 0 0-1.35.523C9.236 1.902 9 2.438 9 3v2.229c-3.657.865-6.333 4.188-6.333 8.006 0 4.547 3.688 8.244 8.224 8.244 1.594 0 3.11-.479 4.441-1.345.277.142.583.226.9.226l.109-.004a2 2 0 0 0 1.453-.75 10.14 10.14 0 0 0 2.204-6.297 10.1 10.1 0 0 0-1.771-5.7m-7.336 11.87c-3.438 0-6.224-2.793-6.224-6.244A6.23 6.23 0 0 1 10 7.071v6.408l4.609 4.754a6.17 6.17 0 0 1-3.718 1.246M11 12.025V3a11.54 11.54 0 0 1 6.366 2.641zm.214 1.269 5.019-5.028a8.07 8.07 0 0 1 1.769 5.043 8.07 8.07 0 0 1-1.769 5.051z" />
      </G>
    </Svg>
  );
};