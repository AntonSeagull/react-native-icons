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

export const Imn2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3 3.688a1.815 1.815 0 0 1 1.788 2.115.312.312 0 0 1-.616 0c-.096-.573-.589-.833-1.171-.833s-1.074.26-1.171.833a.312.312 0 0 1-.616 0 1.815 1.815 0 0 1 1.788-2.115zm-6 0a1.815 1.815 0 0 1 1.788 2.115.312.312 0 0 1-.616 0c-.096-.573-.589-.833-1.171-.833s-1.074.26-1.171.833a.312.312 0 0 1-.616 0 1.815 1.815 0 0 1 1.788-2.115zM3 9h3v3.873A4.02 4.02 0 0 1 3 9m4 4V9h2v4zm3-.127V9h3a4.02 4.02 0 0 1-3 3.873" />
      </G>
    </Svg>
  );
};