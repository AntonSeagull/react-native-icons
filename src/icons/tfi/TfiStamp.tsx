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

export const TfiStamp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17 11.918a1.9 1.9 0 0 0-1.897-1.898h-4.396l1.26-4.517.019-3.52C11.984.908 11.071 0 9.99 0H6.999C5.916 0 5.002.908 5.002 1.983v3.361L6.28 10.02H1.897A1.9 1.9 0 0 0 0 11.918V16h1v1h15v-1h1zM16 15H1v-3.082c0-.495.402-.898.897-.898h5.697L6.002 5.276V1.983c0-.524.466-.983.997-.983H9.99c.529 0 .994.459.994.983V5.3L9.39 11.02h5.713c.495 0 .897.403.897.898z" />
      </G>
    </Svg>
  );
};