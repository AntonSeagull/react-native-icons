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

export const SiShadow = (props: IconProps) => {
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
        <Path d="M12 0C5.373 0 0 5.373 0 12a11.97 11.97 0 0 0 3.918 8.87 4.5 4.5 0 0 1-.2-1.324 4.453 4.453 0 1 1 5.891 4.216Q10.77 23.998 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0" />
      </G>
    </Svg>
  );
};