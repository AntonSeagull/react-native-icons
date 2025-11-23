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

export const LiaArrowsAltSolid = (props: IconProps) => {
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
        <Path d="m16 1.586-5.707 5.707 1.414 1.414L15 5.414V15H5.414l3.293-3.293-1.414-1.414L1.586 16l5.707 5.707 1.414-1.414L5.414 17H15v9.586l-3.293-3.293-1.414 1.414L16 30.414l5.707-5.707-1.414-1.414L17 26.586V17h9.586l-3.293 3.293 1.414 1.414L30.414 16l-5.707-5.707-1.414 1.414L26.586 15H17V5.414l3.293 3.293 1.414-1.414z" />
      </G>
    </Svg>
  );
};