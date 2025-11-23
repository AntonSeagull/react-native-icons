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

export const PiStarFourLight = (props: IconProps) => {
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
        <Path d="M228.81 114.89 164.5 91.5l-23.39-64.31a13.95 13.95 0 0 0-26.22 0L91.5 91.5l-64.31 23.39a13.95 13.95 0 0 0 0 26.22L91.5 164.5l23.39 64.31a13.95 13.95 0 0 0 26.22 0l23.39-64.31 64.31-23.39a13.95 13.95 0 0 0 0-26.22m-4.1 15-66.94 24.34a6 6 0 0 0-3.59 3.59l-24.34 66.94a2 2 0 0 1-3.68 0l-24.34-66.94a6 6 0 0 0-3.59-3.59l-66.94-24.39a2 2 0 0 1 0-3.68l66.94-24.34a6 6 0 0 0 3.59-3.59l24.34-66.94a2 2 0 0 1 3.68 0l24.34 66.94a6 6 0 0 0 3.59 3.59l66.94 24.34a2 2 0 0 1 0 3.68Z" />
      </G>
    </Svg>
  );
};