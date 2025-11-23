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

export const TbArrowBigRightLinesFilled = (props: IconProps) => {
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
        <Path d="M12.089 3.634A2 2 0 0 0 11 5.414l-.001 2.585L9 8a1 1 0 0 0-1 1v6l.007.117A1 1 0 0 0 9 16l1.999-.001.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434zM3 8a1 1 0 0 1 .993.883L4 9v6a1 1 0 0 1-1.993.117L2 15V9a1 1 0 0 1 1-1M6 8a1 1 0 0 1 .993.883L7 9v6a1 1 0 0 1-1.993.117L5 15V9a1 1 0 0 1 1-1" />
      </G>
    </Svg>
  );
};