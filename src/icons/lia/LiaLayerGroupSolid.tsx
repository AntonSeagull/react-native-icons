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

export const LiaLayerGroupSolid = (props: IconProps) => {
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
        <Path d="m16 5.938-.375.125-10 4L3.313 11l2.312.938L9.531 13.5l-3.906 1.563L3.313 16l2.312.938L9.531 18.5l-3.906 1.563L3.313 21l2.312.938 10 4 .375.125.375-.125 10-4L28.688 21l-2.313-.937-3.906-1.563 3.906-1.562L28.688 16l-2.313-.937-3.906-1.563 3.906-1.562L28.688 11l-2.313-.937-10-4Zm0 2.156L23.281 11 16 13.906 8.719 11Zm-3.75 6.5 3.375 1.344.375.124.375-.125 3.375-1.343L23.281 16 16 18.906 8.719 16Zm0 5 3.375 1.343.375.125.375-.125 3.375-1.343L23.281 21 16 23.906 8.719 21Z" />
      </G>
    </Svg>
  );
};