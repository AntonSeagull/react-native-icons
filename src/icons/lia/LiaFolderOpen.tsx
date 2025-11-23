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

export const LiaFolderOpen = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 3v24.813l.781.156 12 2.5 1.219.25V28h6V15.438l1.719-1.72.281-.312V3Zm9.125 2H25v7.563l-1.719 1.718-.281.313V26h-4v-8.906l-.281-.313L17 15.063V5.719ZM7 5.281l8 2v8.625l.281.313L17 17.937v10.344L7 26.188Z" />
      </G>
    </Svg>
  );
};