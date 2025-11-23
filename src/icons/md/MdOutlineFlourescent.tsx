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

export const MdOutlineFlourescent = (props: IconProps) => {
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
        <Path d="M5 15h14V9H5zm2-4h10v2H7zM11 2h2v3h-2zM17.286 6.399l1.79-1.803 1.42 1.41-1.79 1.802zM11 19h2v3h-2zM17.29 17.71l1.79 1.8 1.42-1.42-1.8-1.79zM3.495 6.01l1.407-1.408L6.69 6.391 5.284 7.798zM3.492 18.076l1.803-1.79 1.409 1.42-1.803 1.79z" />
      </G>
    </Svg>
  );
};