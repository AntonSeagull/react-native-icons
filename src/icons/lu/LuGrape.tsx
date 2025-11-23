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

export const LuGrape = (props: IconProps) => {
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
        <Path d="M22 5V2l-5.89 5.89" />
        <Circle cx={16.6} cy={15.89} r={3} />
        <Circle cx={8.11} cy={7.4} r={3} />
        <Circle cx={12.35} cy={11.65} r={3} />
        <Circle cx={13.91} cy={5.85} r={3} />
        <Circle cx={18.15} cy={10.09} r={3} />
        <Circle cx={6.56} cy={13.2} r={3} />
        <Circle cx={10.8} cy={17.44} r={3} />
        <Circle cx={5} cy={19} r={3} />
      </G>
    </Svg>
  );
};