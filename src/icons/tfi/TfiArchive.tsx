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

export const TfiArchive = (props: IconProps) => {
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
        <Path d="M17 2H0v4h1v11h15V6h1zm-2 14H2V6h13zm1-11H1V3h15zM6 11h5.016c1.103 0 2-.897 2-2s-.897-2-2-2H6c-1.103 0-2 .897-2 2s.897 2 2 2m0-3h5.016a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2" />
      </G>
    </Svg>
  );
};