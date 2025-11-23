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

export const FcCamcorderPro = (props: IconProps) => {
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
        <Path fill="#37474F" d="M27 8h10v4H27z" />
        <Path fill="#607D8B" d="M27 8h-9.7c-1.5 0-2.8.8-3.5 2.1l-3.3 6L14 18l3.3-6H27v7.2h4V12c0-2.2-1.8-4-4-4" />
        <Path fill="#607D8B" d="M30 40H6c-2.2 0-4-1.8-4-4V20c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4M38 35l5 5h3V18h-3l-5 5z" />
        <Path fill="#546E7A" d="M22 35H8c-1.1 0-2-.9-2-2V23c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2" />
        <Path fill="#455A64" d="M34 23h4v12h-4z" />
        <Path fill="#263238" d="M41 13h-4c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h4c1.7 0 3 1.3 3 3s-1.3 3-3 3" />
        <Path fill="#03A9F4" d="M8 23h14v10H8z" />
        <Path fill="#4FC3F7" d="M13.5 25.5 9 32h9z" />
        <Circle cx={19.5} cy={25.5} r={1.5} />
        <Path d="M17.5 27.6 14 32h7z" />
      </G>
    </Svg>
  );
};