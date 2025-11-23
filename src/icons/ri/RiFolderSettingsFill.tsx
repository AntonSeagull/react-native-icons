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

export const RiFolderSettingsFill = (props: IconProps) => {
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
        <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zm-3.823 8.809-.991.572 1 1.731.991-.572c.393.371.872.653 1.405.811v1.145h1.999V16.35a3.5 3.5 0 0 0 1.404-.811l.992.572.999-1.73-.991-.573a3.5 3.5 0 0 0 0-1.622l.991-.572-1-1.732-.992.573a3.5 3.5 0 0 0-1.404-.812V8.5h-1.999v1.144a3.5 3.5 0 0 0-1.404.812L8.6 9.883 7.6 11.615l.991.572a3.5 3.5 0 0 0 0 1.622m3.404.688a1.5 1.5 0 1 1 0-2.998 1.5 1.5 0 0 1 0 2.998" />
      </G>
    </Svg>
  );
};