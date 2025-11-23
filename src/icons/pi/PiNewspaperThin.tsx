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

export const PiNewspaperThin = (props: IconProps) => {
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
        <Path d="M180 112a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4m-4 28H96a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8m52-76v120a20 20 0 0 1-20 20H32a20 20 0 0 1-20-19.92V88a4 4 0 0 1 8 0v96a12 12 0 0 0 24 0V64a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H56a4 4 0 0 0-4 4v120a19.86 19.86 0 0 1-4 12h160a12 12 0 0 0 12-12Z" />
      </G>
    </Svg>
  );
};