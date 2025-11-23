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

export const TfiZip = (props: IconProps) => {
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
        <Path d="M9.667 0H2v17h13V5.308zM10 1.742 13.273 5H10zM3 16V1h3v1h1V1h2v5h5v10zm2-8h1v1H5zm1 0V7h1v1zm0-2V5h1v1zM5 6h1v1H5zm0-2h1v1H5zm1 0V3h1v1zM5 2h1v1H5zm1 7.389c-1.103 0-2 .897-2 2s.897 2 2 2c.062 0 .121-.007.219-.02a2 2 0 0 0 1.531-1.026c.166-.303.25-.624.25-.954 0-1.103-.897-2-2-2m.873 2.475a1 1 0 0 1-.762.512l-.112.014a1 1 0 0 1 .001-2c.551 0 1 .449 1 1a1 1 0 0 1-.127.474" />
      </G>
    </Svg>
  );
};