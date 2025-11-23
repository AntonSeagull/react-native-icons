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

export const TbCarouselHorizontalFilled = (props: IconProps) => {
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
        <Path d="M16 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M22 6a1 1 0 0 1 .117 1.993L22 8h-1v8h1a1 1 0 0 1 .117 1.993L22 18h-1a2 2 0 0 1-1.995-1.85L19 16V8a2 2 0 0 1 1.85-1.995L21 6zM3 6a2 2 0 0 1 1.995 1.85L5 8v8a2 2 0 0 1-1.85 1.995L3 18H2a1 1 0 0 1-.117-1.993L2 16h1V8H2a1 1 0 0 1-.117-1.993L2 6z" />
      </G>
    </Svg>
  );
};