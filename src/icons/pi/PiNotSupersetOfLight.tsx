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

export const PiNotSupersetOfLight = (props: IconProps) => {
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
        <Path d="M208 194H76.11l25.45-28H152a62 62 0 0 0 44.81-104.78L212.44 44a6 6 0 1 0-8.88-8l-15.83 17.38A61.6 61.6 0 0 0 152 42H56a6 6 0 0 0 0 12h96a49.67 49.67 0 0 1 27.59 8.33L96.25 154H56a6 6 0 0 0 0 12h29.35l-41.79 46a6 6 0 0 0 8.88 8l12.76-14H208a6 6 0 0 0 0-12M188.73 70.12A50 50 0 0 1 152 154h-39.53Z" />
      </G>
    </Svg>
  );
};