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

export const TbWheatOff = (props: IconProps) => {
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
        <Path d="m3 3 18 18M12 21.5v-3.75M5.916 9.49l-.43 1.604a4.984 4.984 0 0 0 3.524 6.104L12 18v-3.44a4.98 4.98 0 0 0-3.677-4.426zM10.249 4.251l.021-.021L12 2.5" />
        <Path d="M10.27 11.15a4.9 4.9 0 0 1-1.246-2.118M14.988 8.988A4.9 4.9 0 0 0 13.73 4.23L12 2.5M16.038 10.037l2.046-.547.431 1.604c.142.53.193 1.063.162 1.583M16.506 16.505c-.45.307-.959.544-1.516.694L12 18v-3.44a5 5 0 0 1 .582-1.978" />
      </G>
    </Svg>
  );
};