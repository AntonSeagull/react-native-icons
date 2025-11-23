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

export const TbIrregularPolyhedronPlus = (props: IconProps) => {
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
        <Path d="m18 12 1.752-6.13a1 1 0 0 0-.592-1.205l-6.282-2.503a2.46 2.46 0 0 0-1.756 0L4.84 4.665a1 1 0 0 0-.592 1.204L6 12l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l.221-.088" />
        <Path d="m4.5 5.5 6.622 2.33a2.35 2.35 0 0 0 1.756 0L19.5 5.5M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0L18 12M12 22V8M16 19h6M19 16v6" />
      </G>
    </Svg>
  );
};