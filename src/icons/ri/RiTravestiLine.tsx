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

export const RiTravestiLine = (props: IconProps) => {
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
        <Path d="M8.951 8.537A7.5 7.5 0 1 1 7.537 9.95L4.662 7.075 2.187 9.55.772 8.136l6.364-6.364 1.415 1.414-2.475 2.475zM13.501 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
      </G>
    </Svg>
  );
};