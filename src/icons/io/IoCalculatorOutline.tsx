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

export const IoCalculatorOutline = (props: IconProps) => {
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
        <Rect width={288} height={416} x={112} y={48} rx={32} ry={32} style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Path d="M160.01 112H352v64H160.01z" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Circle cx={168} cy={248} r={24} />
        <Circle cx={256} cy={248} r={24} />
        <Circle cx={344} cy={248} r={24} />
        <Circle cx={168} cy={328} r={24} />
        <Circle cx={256} cy={328} r={24} />
        <Circle cx={168} cy={408} r={24} />
        <Circle cx={256} cy={408} r={24} />
        <Rect width={48} height={128} x={320} y={304} rx={24} ry={24} />
      </G>
    </Svg>
  );
};