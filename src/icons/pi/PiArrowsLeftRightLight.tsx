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

export const PiArrowsLeftRightLight = (props: IconProps) => {
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
        <Path d="M212.24 171.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L193.51 182H48a6 6 0 0 1 0-12h145.51l-21.75-21.76a6 6 0 0 1 8.48-8.48ZM75.76 116.24a6 6 0 0 0 8.48-8.48L62.49 86H208a6 6 0 0 0 0-12H62.49l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48Z" />
      </G>
    </Svg>
  );
};