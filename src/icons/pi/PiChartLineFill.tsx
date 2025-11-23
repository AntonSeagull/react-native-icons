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

export const PiChartLineFill = (props: IconProps) => {
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
        <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 136a8 8 0 0 1 0 16H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v62.92l34.88-29.07a8 8 0 0 1 9.56-.51l43 28.69 43.41-36.18a8 8 0 0 1 10.24 12.3l-48 40a8 8 0 0 1-9.56.51l-43-28.69L64 155.75V176Z" />
      </G>
    </Svg>
  );
};