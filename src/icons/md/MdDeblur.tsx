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

export const MdDeblur = (props: IconProps) => {
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
        <Path d="M12 3v18a9 9 0 0 0 0-18" />
        <Circle cx={6} cy={14} r={1} />
        <Circle cx={6} cy={18} r={1} />
        <Circle cx={6} cy={10} r={1} />
        <Circle cx={3} cy={10} r={0.5} />
        <Circle cx={6} cy={6} r={1} />
        <Circle cx={3} cy={14} r={0.5} />
        <Circle cx={10} cy={21} r={0.5} />
        <Circle cx={10} cy={3} r={0.5} />
        <Circle cx={10} cy={6} r={1} />
        <Circle cx={10} cy={14} r={1.5} />
        <Circle cx={10} cy={10} r={1.5} />
        <Circle cx={10} cy={18} r={1} />
      </G>
    </Svg>
  );
};