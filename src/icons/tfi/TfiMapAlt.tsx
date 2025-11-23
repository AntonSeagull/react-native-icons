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

export const TfiMapAlt = (props: IconProps) => {
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
        <Path d="M15 4v.069l-.013-.058-1.015.221C13.833 2.429 12.338 1 10.5 1 8.659 1 7.161 2.435 7.026 4.242L6 4.019V4H0v11h5.348l5.196 1.479L16 14.874V4zm-4.5-2C11.879 2 13 3.122 13 4.5c0 1.806-1.719 4.209-2.5 5.207C9.719 8.709 8 6.306 8 4.5 8 3.122 9.121 2 10.5 2M6 5.042l1.081.235c.412 2.269 2.406 4.788 2.919 5.406v4.602l-4-1.139zM1 5h4v9.017L1 14zm10 10.303v-4.621c.514-.619 2.513-3.145 2.921-5.416L15 5.032v9.094zm.858-10.72c0-.749-.609-1.358-1.358-1.358a1.36 1.36 0 0 0 0 2.717 1.36 1.36 0 0 0 1.358-1.359m-1.716 0a.358.358 0 1 1 .717 0 .358.358 0 0 1-.717 0" />
      </G>
    </Svg>
  );
};