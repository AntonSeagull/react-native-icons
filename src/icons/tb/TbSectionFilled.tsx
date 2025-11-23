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

export const TbSectionFilled = (props: IconProps) => {
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
        <Path d="M20.01 19a1 1 0 0 1 .117 1.993L20 21a1 1 0 0 1-.117-1.993zm-16 0a1 1 0 0 1 0 2 1 1 0 0 1-.127-1.993zm4 0a1 1 0 0 1 0 2 1 1 0 0 1-.127-1.993zm4 0a1 1 0 0 1 .117 1.993L12 21a1 1 0 0 1-.117-1.993zm4 0a1 1 0 0 1 .117 1.993L16 21a1 1 0 0 1-.117-1.993zm4-16a1 1 0 0 1 .117 1.993L20 5a1 1 0 0 1-.117-1.993zm-16 0a1 1 0 1 1 0 2 1 1 0 0 1-.127-1.993zm4 0a1 1 0 1 1 0 2 1 1 0 0 1-.127-1.993zm4 0a1 1 0 0 1 .117 1.993L12 5a1 1 0 0 1-.117-1.993zM16 3a1 1 0 0 1 1 1 1 1 0 1 1-2 .01c0-.562.448-1.01 1-1.01m3 4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
      </G>
    </Svg>
  );
};