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

export const DiCode = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z" />
      </G>
    </Svg>
  );
};