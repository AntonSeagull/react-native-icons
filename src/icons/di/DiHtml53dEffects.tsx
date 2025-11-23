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

export const DiHtml53dEffects = (props: IconProps) => {
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
        <Path fill="#444" d="m16.957 6.062-5.808 1.88 12.58 4.07v8.027l-8.383 2.711-7.074-2.287V12.6l6.836 2.213 5.808-1.879L8.318 8.857l-3.622 1.172v13.036l10.649 3.445 11.958-3.869V9.411z" />
      </G>
    </Svg>
  );
};