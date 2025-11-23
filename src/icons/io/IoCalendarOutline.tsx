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

export const IoCalendarOutline = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Rect width={416} height={384} x={48} y={80} fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} rx={48} />
        <Circle cx={296} cy={232} r={24} />
        <Circle cx={376} cy={232} r={24} />
        <Circle cx={296} cy={312} r={24} />
        <Circle cx={376} cy={312} r={24} />
        <Circle cx={136} cy={312} r={24} />
        <Circle cx={216} cy={312} r={24} />
        <Circle cx={136} cy={392} r={24} />
        <Circle cx={216} cy={392} r={24} />
        <Circle cx={296} cy={392} r={24} />
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M128 48v32M384 48v32" />
        <Path fill="none" stroke="#000" strokeLinejoin="round" strokeWidth={32} d="M464 160H48" />
      </G>
    </Svg>
  );
};