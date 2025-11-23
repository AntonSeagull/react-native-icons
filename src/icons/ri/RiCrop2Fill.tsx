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

export const RiCrop2Fill = (props: IconProps) => {
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
        <Path d="m17.586 5 2.556-2.556 1.414 1.414L19 6.414V17h3v2h-3v3h-2V7H9V5zM15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15zM9 9h6v6H9z" />
      </G>
    </Svg>
  );
};