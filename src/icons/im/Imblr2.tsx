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

export const Imblr2 = (props: IconProps) => {
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
        <Path d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5m-3.066 12.884q-.709.333-1.281.469a5.5 5.5 0 0 1-1.241.134c-.506 0-.803-.063-1.191-.191s-.719-.309-.994-.544q-.411-.356-.569-.753c-.158-.397-.159-.65-.159-1.156V6.971h-1.5V5.408c.434-.141.938-.344 1.244-.606q.465-.394.744-.947.281-.553.388-1.406h1.569v2.55H11v1.972H8.447v2.831c0 .641-.009 1.009.059 1.191s.238.369.422.475q.367.22.838.219.839 0 1.669-.544z" />
      </G>
    </Svg>
  );
};