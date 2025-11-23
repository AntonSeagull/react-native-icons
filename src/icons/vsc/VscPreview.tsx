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

export const VscPreview = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M2 2h12l1 1v10l-1 1H2l-1-1V3zm0 11h12V3H2zm11-9H3v3h10zm-1 2H4V5h8zm-3 6h4V8H9zm1-3h2v2h-2zM7 8H3v1h4zm-4 3h4v1H3z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};