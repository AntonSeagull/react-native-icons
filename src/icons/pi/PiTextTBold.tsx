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

export const PiTextTBold = (props: IconProps) => {
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
        <Path d="M212 56v32a12 12 0 0 1-24 0V68h-48v120h20a12 12 0 0 1 0 24H96a12 12 0 0 1 0-24h20V68H68v20a12 12 0 0 1-24 0V56a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};