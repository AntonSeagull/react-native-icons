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

export const LiaVolumeDownSolid = (props: IconProps) => {
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
        <Path d="M15 4.594 13.281 6.28 8.562 11H4v10h4.563l4.718 4.719L15 27.406Zm-2 4.844v13.125L9.719 19.28 9.406 19H6v-6h3.406l.313-.281Zm5.5 2.593-1.437 1.438c.578.695.937 1.558.937 2.531s-.36 1.836-.937 2.531L18.5 19.97A5.96 5.96 0 0 0 20 16c0-1.523-.562-2.91-1.5-3.969" />
      </G>
    </Svg>
  );
};