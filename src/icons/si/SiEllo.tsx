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

export const SiEllo = (props: IconProps) => {
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
        <Path d="M12 0C5.377 0 0 5.377 0 12s5.377 12 12 12 12-5.377 12-12S18.623 0 12 0m6.96 13.8c-.8 3.16-3.68 5.4-6.96 5.4s-6.16-2.24-6.96-5.4c-.08-.36.12-.76.48-.84s.76.12.84.48c.68 2.56 3 4.36 5.64 4.36s4.96-1.8 5.64-4.36c.08-.36.48-.6.84-.48.36.08.6.48.48.84" />
      </G>
    </Svg>
  );
};