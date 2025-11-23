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

export const PiSpinnerLight = (props: IconProps) => {
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
        <Path d="M134 32v32a6 6 0 0 1-12 0V32a6 6 0 0 1 12 0m39.25 56.75A6 6 0 0 0 177.5 87l22.62-22.63a6 6 0 0 0-8.48-8.48L169 78.5a6 6 0 0 0 4.24 10.25ZM224 122h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m-46.5 47a6 6 0 0 0-8.5 8.5l22.63 22.62a6 6 0 0 0 8.48-8.48ZM128 186a6 6 0 0 0-6 6v32a6 6 0 0 0 12 0v-32a6 6 0 0 0-6-6m-49.5-17-22.62 22.64a6 6 0 1 0 8.48 8.48L87 177.5a6 6 0 1 0-8.5-8.5M70 128a6 6 0 0 0-6-6H32a6 6 0 0 0 0 12h32a6 6 0 0 0 6-6m-5.64-72.12a6 6 0 0 0-8.48 8.48L78.5 87a6 6 0 1 0 8.5-8.5Z" />
      </G>
    </Svg>
  );
};