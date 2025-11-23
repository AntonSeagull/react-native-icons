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

export const FcMindMap = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#CFD8DC" d="m39.4 23-.8-4L26 21.6V8h-4v12.3l-13.9-9-2.2 3.4 15.2 9.8L9.4 39.8l3.2 2.4 11.3-14.8 8.4 12.7 3.4-2.2-8.4-12.5z" />
        <Circle cx={24} cy={24} r={7} fill="#3F51B5" />
        <Circle cx={24} cy={8} r={5} />
        <Circle cx={39} cy={21} r={5} />
        <Circle cx={7} cy={13} r={5} />
        <Circle cx={11} cy={41} r={5} />
        <Circle cx={34} cy={39} r={5} />
      </G>
    </Svg>
  );
};