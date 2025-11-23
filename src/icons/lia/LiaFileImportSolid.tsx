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

export const LiaFileImportSolid = (props: IconProps) => {
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
        <Path d="M6 4v24h20v-9h-2v7H8V6h16v7h2V4Zm11.5 7-4.312 4.281L12.5 16l.688.719L17.5 21l1.406-1.406L16.313 17H28v-2H16.313l2.593-2.594Z" />
      </G>
    </Svg>
  );
};