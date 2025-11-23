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

export const SiBuildkite = (props: IconProps) => {
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
        <Path d="m23.613 8.143-7.668-3.856v7.712zM8.166 15.857V8.143L.387 4.287V12l7.78 3.857zM.183 3.958a.38.38 0 0 1 .377-.017l7.606 3.771 7.607-3.771a.39.39 0 0 1 .346 0l7.668 3.857a.39.39 0 0 1 .213.345v7.71a.39.39 0 0 1-.213.346l-7.668 3.86a.39.39 0 0 1-.562-.345v-7.09l-7.219 3.58a.4.4 0 0 1-.344 0L.215 12.346A.39.39 0 0 1 0 12V4.287a.39.39 0 0 1 .183-.329" />
      </G>
    </Svg>
  );
};