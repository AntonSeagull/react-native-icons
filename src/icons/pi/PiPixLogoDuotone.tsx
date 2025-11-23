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

export const PiPixLogoDuotone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m229.67 133.62-96 96a7.94 7.94 0 0 1-11.24 0l-96-96a7.94 7.94 0 0 1 0-11.24l96.05-96a7.94 7.94 0 0 1 11.24 0l96 96.05a7.94 7.94 0 0 1-.05 11.19" opacity={0.2} />
        <Path d="m235.34 116.72-96.06-96.06a16 16 0 0 0-22.56 0l-96.06 96.06a16 16 0 0 0 0 22.56l96.06 96.06a16 16 0 0 0 22.56 0l96.06-96.06a16 16 0 0 0 0-22.56M128 32l56 56h-24a8 8 0 0 0-5.66 2.34L128 116.68l-26.34-26.34A8 8 0 0 0 96 88H72Zm-72 72h36.68l24 24-24 24H56l-24-24Zm72 120-56-56h24a8 8 0 0 0 5.66-2.34L128 139.31l26.34 26.35A8 8 0 0 0 160 168h24Zm72-72h-36.68l-24-24 24-24H200l24 24Z" />
      </G>
    </Svg>
  );
};