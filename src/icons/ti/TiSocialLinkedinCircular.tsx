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

export const TiSocialLinkedinCircular = (props: IconProps) => {
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
        <Path d="M10.033 15.3h-1.6v-5.199h1.6zm-.8-5.866q-.866 0-.866-.8a.74.74 0 0 1 .25-.567.87.87 0 0 1 .616-.233q.866 0 .866.801c0 .801-.288.799-.866.799m6.734 5.866h-1.633v-2.9q0-1.133-.801-1.133-.632 0-.834.633-.065.101-.066.4v3H11v-3.533q0-1.2-.033-1.666h1.4l.1.699c.367-.556.9-.833 1.633-.833q.835 0 1.35.583.518.583.518 1.684V15.3zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9m0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7" />
      </G>
    </Svg>
  );
};