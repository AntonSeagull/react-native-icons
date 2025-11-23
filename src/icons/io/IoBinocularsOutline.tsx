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

export const IoBinocularsOutline = (props: IconProps) => {
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
        <Circle cx={392} cy={344} r={88} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} />
        <Circle cx={120} cy={344} r={88} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} />
        <Path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M208 344V128c0-26.5-16-48-44-48-35 0-46.5 21.5-57 48 0 0-48.5 127.833-71 189.5M208 184s16.5-8 48-8 48 8 48 8M208 272s16.5-8 48-8 48 8 48 8M304 344V128c0-26.5 16-48 44-48 35 0 46.5 21.5 57 48 0 0 48.5 127.833 71 189.5" />
      </G>
    </Svg>
  );
};