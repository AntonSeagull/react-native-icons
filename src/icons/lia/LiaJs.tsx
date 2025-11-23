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

export const LiaJs = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M0 7v18h32V7Zm2 2h28v14H2Zm10 3v5.5c0 .215-.285.5-.5.5s-.5-.285-.5-.5V17H9v.5c0 1.383 1.117 2.5 2.5 2.5s2.5-1.117 2.5-2.5V12Zm6.5 0a2.497 2.497 0 0 0-2.5 2.5c0 1.383 1.117 2.5 2.5 2.5.215 0 .5.285.5.5 0 .3-.117.5-.5.5-.367 0-.426-.078-.437-.094-.012-.015-.063-.078-.063-.312h-2c0 .566.164 1.203.625 1.687.46.485 1.145.719 1.875.719 1.418 0 2.5-1.2 2.5-2.5 0-1.383-1.117-2.5-2.5-2.5-.215 0-.5-.285-.5-.5s.285-.5.5-.5c.266 0 .348.063.406.125a.42.42 0 0 1 .094.281h2c0-.59-.215-1.191-.656-1.656S19.234 12 18.5 12" />
      </G>
    </Svg>
  );
};