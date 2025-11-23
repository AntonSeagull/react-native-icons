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

export const TbBrandYoutubeKids = (props: IconProps) => {
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
        <Path d="m18.608 17.75-3.9.268h-.027a13.8 13.8 0 0 0-3.722.828l-2.511.908a4.11 4.11 0 0 1-3.287-.216 3.82 3.82 0 0 1-1.98-2.527l-1.376-6.05a3.67 3.67 0 0 1 .536-2.86A3.96 3.96 0 0 1 4.83 6.44l11.25-2.354c2.137-.448 4.247.85 4.713 2.9l1.403 6.162a3.68 3.68 0 0 1-.697 3.086 4 4 0 0 1-2.89 1.512v.002z" />
        <Path d="m9 10 1.208 5 4.292-4z" />
      </G>
    </Svg>
  );
};