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

export const TbAlignBoxRightMiddleFilled = (props: IconProps) => {
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
        <Path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM18 14h-2l-.117.007a1 1 0 0 0 0 1.986L16 16h2l.117-.007a1 1 0 0 0 0-1.986zm0-3h-6l-.117.007a1 1 0 0 0 0 1.986L12 13h6l.117-.007a1 1 0 0 0 0-1.986zm0-3h-4l-.117.007a1 1 0 0 0 0 1.986L14 10h4l.117-.007a1 1 0 0 0 0-1.986z" />
      </G>
    </Svg>
  );
};