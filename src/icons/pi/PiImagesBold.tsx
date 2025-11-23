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

export const PiImagesBold = (props: IconProps) => {
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
        <Path d="M160 88a16 16 0 1 1 16 16 16 16 0 0 1-16-16m76-32v104a20 20 0 0 1-20 20h-12v20a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V88a20 20 0 0 1 20-20h20V56a20 20 0 0 1 20-20h136a20 20 0 0 1 20 20m-56 124H80a20 20 0 0 1-20-20V92H44v104h136Zm-21.66-24L124 121.66 89.66 156ZM212 60H84v67.72l25.86-25.86a20 20 0 0 1 28.28 0L192.28 156H212Z" />
      </G>
    </Svg>
  );
};