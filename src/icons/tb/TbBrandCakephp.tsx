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

export const TbBrandCakephp = (props: IconProps) => {
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
        <Path d="m12 11 8 2c1.361-.545 2-1.248 2-2V7.2C22 5.435 17.521 4 11.998 4 6.476 4 2 5.435 2 7.2V10c0 1.766 4.478 4 10 4zM12 14v3l8 2c1.362-.547 2-1.246 2-2v-3c0 .754-.638 1.453-2 2zM2 17c0 1.766 4.476 3 9.998 3L12 17c-5.522 0-10-1.734-10-3.5zM2 10v4M22 10v4" />
      </G>
    </Svg>
  );
};