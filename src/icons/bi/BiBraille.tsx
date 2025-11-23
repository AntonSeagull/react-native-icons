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

export const BiBraille = (props: IconProps) => {
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
        <Circle cx={4} cy={7} r={2} />
        <Circle cx={9} cy={12} r={2} />
        <Circle cx={15} cy={7} r={2} />
        <Circle cx={15} cy={12} r={2} />
        <Circle cx={15} cy={17} r={2} />
        <Circle cx={20} cy={7} r={2} />
        <Circle cx={4} cy={17} r={2} />
      </G>
    </Svg>
  );
};