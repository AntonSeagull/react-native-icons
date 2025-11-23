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

export const LuTangent = (props: IconProps) => {
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
        <Circle cx={17} cy={4} r={2} />
        <Path d="M15.59 5.41 5.41 15.59" />
        <Circle cx={4} cy={17} r={2} />
        <Path d="M12 22s-4-9-1.5-11.5S22 12 22 12" />
      </G>
    </Svg>
  );
};