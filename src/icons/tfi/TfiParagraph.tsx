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

export const TfiParagraph = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 1.026H4.992c-2.181 0-3.955 1.774-3.955 3.955s1.774 3.954 3.955 3.954H8V16h1V2.026h2.015V16h1V2.026H16zm-8 6.91H4.992a2.957 2.957 0 0 1-2.955-2.954 2.96 2.96 0 0 1 2.955-2.955H8z" />
      </G>
    </Svg>
  );
};