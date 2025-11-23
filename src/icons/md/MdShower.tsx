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

export const MdShower = (props: IconProps) => {
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
        <Circle cx={8} cy={17} r={1} />
        <Circle cx={12} cy={17} r={1} />
        <Circle cx={16} cy={17} r={1} />
        <Path d="M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92" />
        <Circle cx={8} cy={20} r={1} />
        <Circle cx={12} cy={20} r={1} />
        <Circle cx={16} cy={20} r={1} />
      </G>
    </Svg>
  );
};