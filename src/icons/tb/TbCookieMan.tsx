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

export const TbCookieMan = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path d="M12 2a5 5 0 0 1 2.845 9.112l.147.369 1.755-.803c.969-.443 2.12-.032 2.571.918a1.88 1.88 0 0 1-.787 2.447l-.148.076L16 15.208v2.02l1.426 1.425.114.125a1.96 1.96 0 0 1-2.762 2.762l-.125-.114-2.079-2.08-.114-.124a2 2 0 0 1-.161-.22H11.7q-.071.114-.16.22l-.115.125-2.08 2.079a1.96 1.96 0 0 1-2.886-2.648l.114-.125L8 17.227v-2.019l-2.383-1.09-.148-.075a1.88 1.88 0 0 1-.787-2.447c.429-.902 1.489-1.318 2.424-.978l.147.06 1.755.803.147-.369a5 5 0 0 1-2.15-3.895V7a5 5 0 0 1 5-5zM12 16h.01M12 13h.01M10 7h.01M14 7h.01M12 9h.01" />
      </G>
    </Svg>
  );
};