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

export const ImtAlphaAsc = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 12V0H3v12H.5L4 15.5 7.5 12zM14.5 16h-4a.5.5 0 0 1-.416-.777L13.566 10H10.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .416.777L11.434 15H14.5a.5.5 0 0 1 0 1M15.947 6.276l-3-6a.5.5 0 0 0-.894 0l-3 6a.5.5 0 0 0 .895.447l.862-1.724h3.382l.862 1.724a.5.5 0 0 0 .895-.447zM11.309 4 12.5 1.618 13.691 4z" />
      </G>
    </Svg>
  );
};