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

export const LiaMugHotSolid = (props: IconProps) => {
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
        <Path d="M12 2v4h2V2Zm4 1v3h2V3ZM6 7v18c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3v-5h2c1.645 0 3-1.355 3-3v-3c0-1.645-1.355-3-3-3h-2V7Zm2 2h14v16c0 .555-.445 1-1 1H9c-.555 0-1-.445-1-1Zm16 4h2c.555 0 1 .445 1 1v3c0 .555-.445 1-1 1h-2Z" />
      </G>
    </Svg>
  );
};