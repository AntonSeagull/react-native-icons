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

export const TfiSmallcap = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6 5.925h1v2H6v-1H4v8h1v1H2v-1h1v-8H1v1H0v-2zM16 2H6v2.577h1V3h4v12h-1v1h3v-1h-1V3h4v1.577h1V2z" />
      </G>
    </Svg>
  );
};