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

export const PiBusBold = (props: IconProps) => {
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
        <Path d="M184 28H72a36 36 0 0 0-36 36v144a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20v-16h48v16a20 20 0 0 0 20 20h28a20 20 0 0 0 20-20V64a36 36 0 0 0-36-36M60 168v-56h136v56ZM72 52h112a12 12 0 0 1 12 12v24H60V64a12 12 0 0 1 12-12m8 152H60v-12h20Zm96 0v-12h20v12Zm-68-64a16 16 0 1 1-16-16 16 16 0 0 1 16 16m72 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16m76-60v24a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0M24 80v24a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0" />
      </G>
    </Svg>
  );
};