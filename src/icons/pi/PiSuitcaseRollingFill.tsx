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

export const PiSuitcaseRollingFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M192 48h-24V24a24 24 0 0 0-24-24h-32a24 24 0 0 0-24 24v24H64a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h64v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M96 192a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm40 0a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm16-144h-48V24a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8Zm24 144a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Z" />
      </G>
    </Svg>
  );
};