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

export const BiLoaderCircle = (props: IconProps) => {
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
        <Circle cx={12} cy={20} r={2} />
        <Circle cx={12} cy={4} r={2} />
        <Circle cx={6.343} cy={17.657} r={2} />
        <Circle cx={17.657} cy={6.343} r={2} />
        <Circle cx={4} cy={12} r={2.001} />
        <Circle cx={20} cy={12} r={2} />
        <Circle cx={6.343} cy={6.344} r={2} />
        <Circle cx={17.657} cy={17.658} r={2} />
      </G>
    </Svg>
  );
};