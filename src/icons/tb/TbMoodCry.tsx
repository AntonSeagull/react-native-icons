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

export const TbMoodCry = (props: IconProps) => {
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
        <Path d="M9 10h.01M15 10h.01M9.5 15.25a3.5 3.5 0 0 1 5 0M17.566 17.606a2 2 0 1 0 2.897.03L19 16z" />
        <Path d="M20.865 13.517A9 9 0 0 0 21 12a9 9 0 1 0-9 9c.69 0 1.36-.076 2-.222" />
      </G>
    </Svg>
  );
};