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

export const CiBrightnessDown = (props: IconProps) => {
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
        <Path d="M12 17.5a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5m0-10a4.5 4.5 0 1 0 4.5 4.5A4.505 4.505 0 0 0 12 7.5" />
        <Circle cx={12} cy={2.813} r={0.75} />
        <Circle cx={12} cy={21.187} r={0.75} />
        <Circle cx={21.187} cy={12} r={0.75} />
        <Circle cx={2.813} cy={12} r={0.75} />
        <Circle cx={18.496} cy={5.504} r={0.75} />
        <Circle cx={5.504} cy={18.496} r={0.75} />
        <Circle cx={18.496} cy={18.496} r={0.75} />
        <Circle cx={5.504} cy={5.504} r={0.75} />
      </G>
    </Svg>
  );
};