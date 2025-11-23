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

export const CiPlay1 = (props: IconProps) => {
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
        <Path d="M6.562 21.94a2.5 2.5 0 0 1-2.5-2.5V4.56A2.5 2.5 0 0 1 7.978 2.5l10.877 7.439a2.5 2.5 0 0 1 0 4.12L7.977 21.5a2.5 2.5 0 0 1-1.415.44m0-18.884a1.5 1.5 0 0 0-.7.177 1.48 1.48 0 0 0-.8 1.327v14.879a1.5 1.5 0 0 0 2.35 1.235l10.877-7.44a1.5 1.5 0 0 0 0-2.471L7.413 3.326a1.5 1.5 0 0 0-.849-.27Z" data-name="Play 1" />
      </G>
    </Svg>
  );
};