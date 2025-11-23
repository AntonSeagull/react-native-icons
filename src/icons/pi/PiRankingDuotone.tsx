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

export const PiRankingDuotone = (props: IconProps) => {
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
        <Path d="M40 96h48v112H32V104a8 8 0 0 1 8-8m176 40h-48v72h56v-64a8 8 0 0 0-8-8" opacity={0.2} />
        <Path d="M112.41 102.53a8 8 0 0 1 5.06-10.12l12-4A8 8 0 0 1 140 96v40a8 8 0 0 1-16 0v-28.9l-1.47.49a8 8 0 0 1-10.12-5.06M248 208a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h8v-96a16 16 0 0 1 16-16h40V56a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v72h40a16 16 0 0 1 16 16v56h8a8 8 0 0 1 8 8m-72-64v56h40v-56Zm-80 56h64V56H96Zm-56 0h40v-96H40Z" />
      </G>
    </Svg>
  );
};