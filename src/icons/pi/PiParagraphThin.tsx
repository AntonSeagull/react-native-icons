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

export const PiParagraphThin = (props: IconProps) => {
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
        <Path d="M208 44H96a60 60 0 0 0 0 120h44v44a4 4 0 0 0 8 0V52h32v156a4 4 0 0 0 8 0V52h20a4 4 0 0 0 0-8m-68 112H96a52 52 0 0 1 0-104h44Z" />
      </G>
    </Svg>
  );
};