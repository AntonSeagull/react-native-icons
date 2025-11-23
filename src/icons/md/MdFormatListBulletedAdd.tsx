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

export const MdFormatListBulletedAdd = (props: IconProps) => {
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
        <Path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21zM7 5h13v2H7z" />
        <Circle cx={3.5} cy={18} r={1.5} />
        <Path d="M18 11H7v2h6.11c1.26-1.24 2.99-2 4.89-2M7 17v2h4.08c-.05-.33-.08-.66-.08-1s.03-.67.08-1z" />
        <Circle cx={3.5} cy={6} r={1.5} />
        <Circle cx={3.5} cy={12} r={1.5} />
      </G>
    </Svg>
  );
};