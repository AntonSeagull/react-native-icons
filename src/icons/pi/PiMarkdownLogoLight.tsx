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

export const PiMarkdownLogoLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M232 50H24a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h208a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2Zm-108-88v48a6 6 0 0 1-12 0v-33.51l-21.76 21.75a6 6 0 0 1-8.48 0L62 118.49V152a6 6 0 0 1-12 0v-48a6 6 0 0 1 10.24-4.24L88 127.51l27.76-27.75A6 6 0 0 1 126 104m78.24 19.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48 0l-24-24a6 6 0 1 1 8.48-8.48L170 137.51V104a6 6 0 0 1 12 0v33.51l13.76-13.75a6 6 0 0 1 8.48 0" />
      </G>
    </Svg>
  );
};