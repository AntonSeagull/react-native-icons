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

export const TbHeadphonesOff = (props: IconProps) => {
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
        <Path d="m3 3 18 18M4 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM17 13h1a2 2 0 0 1 2 2v1m-.589 3.417c-.361.36-.86.583-1.411.583h-1a2 2 0 0 1-2-2v-3" />
        <Path d="M4 15v-3c0-2.21.896-4.21 2.344-5.658m2.369-1.638A8 8 0 0 1 20 12v3" />
      </G>
    </Svg>
  );
};