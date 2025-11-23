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

export const AiFillTwitch = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1042 1042"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 521, 521)`}
    >
      <G fill={fill} stroke={stroke}>
        <Defs>
        </Defs>
        <Path d="M185.143 112 128 254.857v542.857h171.429V912h114.285L528 797.714h142.857l200-200V112zm314.286 428.571h-85.715V310.214h85.715zm200 0h-85.715V310.214h85.715z" />
      </G>
    </Svg>
  );
};