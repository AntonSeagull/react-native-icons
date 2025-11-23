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

export const TbCircleArrowUpRightFilled = (props: IconProps) => {
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
        <Path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M15 8H9l-.117.007A1 1 0 0 0 8 9l.007.117A1 1 0 0 0 9 10h3.584l-4.291 4.293-.083.094a1 1 0 0 0 1.497 1.32L14 11.414V15l.007.117A1 1 0 0 0 16 15V9l-.007-.117-.029-.149-.035-.105-.054-.113-.071-.111a1 1 0 0 0-.097-.112l-.09-.08-.096-.067-.098-.052-.11-.044-.112-.03-.126-.017z" />
      </G>
    </Svg>
  );
};