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

export const MdOutlineStream = (props: IconProps) => {
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
        <Circle cx={20} cy={12} r={2} />
        <Circle cx={4} cy={12} r={2} />
        <Circle cx={12} cy={20} r={2} />
        <Path d="m13.943 8.619 4.404-4.392 1.413 1.416-4.405 4.392zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05zM15.41 13.94 14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01zM8.59 13.95l-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32z" />
        <Circle cx={12} cy={4} r={2} />
      </G>
    </Svg>
  );
};