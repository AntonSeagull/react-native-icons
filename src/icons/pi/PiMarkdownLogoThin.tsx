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

export const PiMarkdownLogoThin = (props: IconProps) => {
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
        <Path d="M232 52H24a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h208a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h208a4 4 0 0 1 4 4Zm-112-88v48a4 4 0 0 1-8 0v-38.34l-25.17 25.17a4 4 0 0 1-5.66 0L60 113.66V152a4 4 0 0 1-8 0v-48a4 4 0 0 1 6.83-2.83L88 130.34l29.17-29.17A4 4 0 0 1 124 104m78.83 21.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66 0l-24-24a4 4 0 1 1 5.66-5.66L172 142.34V104a4 4 0 0 1 8 0v38.34l17.17-17.17a4 4 0 0 1 5.66 0" />
      </G>
    </Svg>
  );
};