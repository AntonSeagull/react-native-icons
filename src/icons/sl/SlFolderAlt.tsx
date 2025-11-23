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

export const SlFolderAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M960.16 208h-480l-96-96h-320c-35.344 0-64 28.656-64 64v160h-.304v64H.16v448c0 35.344 28.656 64 64 64h896c35.344 0 64-28.656 64-64V272c0-35.344-28.656-64-64-64M64.145 176h290.75l78.624 77.248L453.632 272H960.16v64h-896V176h-.016zm-.001 672V400h896v448z" />
      </G>
    </Svg>
  );
};