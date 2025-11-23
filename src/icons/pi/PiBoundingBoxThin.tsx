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

export const PiBoundingBoxThin = (props: IconProps) => {
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
        <Path d="M208 92a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v12H92V48a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h12v72H48a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-12h72v12a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-12V92Zm-36-44a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4ZM44 80V48a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4m40 128a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4Zm128-32v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4m-24-12h-12a12 12 0 0 0-12 12v12H92v-12a12 12 0 0 0-12-12H68V92h12a12 12 0 0 0 12-12V68h72v12a12 12 0 0 0 12 12h12Z" />
      </G>
    </Svg>
  );
};