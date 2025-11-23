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

export const TbWallOff = (props: IconProps) => {
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
        <Path d="M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361.36-.86.583-1.411.583H6a2 2 0 0 1-2-2V6c0-.55.222-1.047.58-1.409M4 8h4m4 0h8M20 12h-4m-4 0H4M4 16h12M9 4v1M14 8v2M8 12v4M11 16v4M3 3l18 18" />
      </G>
    </Svg>
  );
};