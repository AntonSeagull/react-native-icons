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

export const TfiMedallAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8.5 0c-2.757 0-5 2.243-5 5 0 1.375.555 2.659 1.562 3.616.085.082.18.154.276.226l.103.078c.179.141.369.257.559.371V16.5l2.479-1.901L11 16.5V9.291c.19-.114.381-.231.56-.372l.103-.077c.096-.072.19-.144.276-.226A4.95 4.95 0 0 0 13.5 5c0-2.757-2.243-5-5-5M10 14.493l-1.526-1.151L7 14.473v-4.225a4.57 4.57 0 0 0 3 0zm1.249-6.601c-.057.055-.121.101-.185.147l-.123.094a3.93 3.93 0 0 1-4.881.001l-.124-.095c-.064-.047-.128-.093-.185-.147A3.96 3.96 0 0 1 4.5 5c0-2.206 1.794-4 4-4s4 1.794 4 4a3.96 3.96 0 0 1-1.251 2.892M10.25 5a1.75 1.75 0 1 1-3.501-.001A1.75 1.75 0 0 1 10.25 5" />
      </G>
    </Svg>
  );
};