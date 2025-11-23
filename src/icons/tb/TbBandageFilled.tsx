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

export const TbBandageFilled = (props: IconProps) => {
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
        <Path d="M20.207 3.793a5.95 5.95 0 0 1 .179 8.228l-.179.186-8 8a5.95 5.95 0 0 1-8.593-8.228l.179-.186 8-8a5.95 5.95 0 0 1 8.414 0M12 13a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 13 14.01l-.007-.127A1 1 0 0 0 12 13m2-2a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 15 12.01l-.007-.127A1 1 0 0 0 14 11m-4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 11 12.01l-.007-.127A1 1 0 0 0 10 11m2-2a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 13 10.01l-.007-.127A1 1 0 0 0 12 9" />
      </G>
    </Svg>
  );
};