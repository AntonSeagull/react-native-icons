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

export const SiLivejournal = (props: IconProps) => {
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
        <Path d="M18.09 14.696a6.57 6.57 0 0 0-3.381 3.399l4.27.883-.886-4.282zM2.475 8.317 0 5.85A11.26 11.26 0 0 1 5.823 0h.006l2.469 2.463a11.2 11.2 0 0 1 4.463-.921C18.967 1.542 24 6.569 24 12.771S18.967 24 12.761 24C6.551 24 1.52 18.976 1.52 12.771c0-1.591.355-3.081.952-4.451l9.143 9.114a11.27 11.27 0 0 1 5.823-5.85l-9.135-9.12h-.008a11.29 11.29 0 0 0-5.823 5.85z" />
      </G>
    </Svg>
  );
};