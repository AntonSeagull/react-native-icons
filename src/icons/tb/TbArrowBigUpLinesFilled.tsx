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

export const TbArrowBigUpLinesFilled = (props: IconProps) => {
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
        <Path d="M10.586 3 4 9.586a2 2 0 0 0-.434 2.18l.068.145A2 2 0 0 0 5.414 13H8v2a1 1 0 0 0 1 1h6l.117-.007A1 1 0 0 0 16 15l-.001-2h2.587A2 2 0 0 0 20 9.586L13.414 3a2 2 0 0 0-2.828 0M15 20a1 1 0 0 1 .117 1.993L15 22H9a1 1 0 0 1-.117-1.993L9 20zM15 17a1 1 0 0 1 .117 1.993L15 19H9a1 1 0 0 1-.117-1.993L9 17z" />
      </G>
    </Svg>
  );
};