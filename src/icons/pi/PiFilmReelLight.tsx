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

export const PiFilmReelLight = (props: IconProps) => {
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
        <Path d="M232 218h-56a102 102 0 1 0-48 12h104a6 6 0 0 0 0-12M38 128a90 90 0 1 1 90 90 90.1 90.1 0 0 1-90-90m90-26a22 22 0 1 0-22-22 22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10 10 10 0 0 1 10-10m22 106a22 22 0 1 0-22 22 22 22 0 0 0 22-22m-32 0a10 10 0 1 1 10 10 10 10 0 0 1-10-10m58-26a22 22 0 1 0-22-22 22 22 0 0 0 22 22m0-32a10 10 0 1 1-10 10 10 10 0 0 1 10-10m-96-12a22 22 0 1 0 22 22 22 22 0 0 0-22-22m0 32a10 10 0 1 1 10-10 10 10 0 0 1-10 10" />
      </G>
    </Svg>
  );
};