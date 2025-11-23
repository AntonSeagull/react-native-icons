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

export const PiCheckSquareOffsetLight = (props: IconProps) => {
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
        <Path d="M222 48v160a14 14 0 0 1-14 14h-72a6 6 0 0 1 0-12h72a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v96a6 6 0 0 1-12 0V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14M115.76 155.76 64 207.51l-19.76-19.75a6 6 0 0 0-8.48 8.48l24 24a6 6 0 0 0 8.48 0l56-56a6 6 0 0 0-8.48-8.48" />
      </G>
    </Svg>
  );
};