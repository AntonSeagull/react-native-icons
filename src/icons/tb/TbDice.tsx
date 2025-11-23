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

export const TbDice = (props: IconProps) => {
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
        <Path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <Circle cx={8.5} cy={8.5} r={0.5} fill="currentColor" />
        <Circle cx={15.5} cy={8.5} r={0.5} fill="currentColor" />
        <Circle cx={15.5} cy={15.5} r={0.5} fill="currentColor" />
        <Circle cx={8.5} cy={15.5} r={0.5} fill="currentColor" />
      </G>
    </Svg>
  );
};