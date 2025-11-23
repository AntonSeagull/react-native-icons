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

export const RxFigmaLogo = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M7 2.05H5.525a1.475 1.475 0 0 0 0 2.95H7zm0-1h2.475a2.475 2.475 0 0 1 1.492 4.45A2.475 2.475 0 0 1 8 9.463v1.962A2.475 2.475 0 1 1 4.033 9.45a2.47 2.47 0 0 1-.983-1.975c0-.807.386-1.523.983-1.975a2.475 2.475 0 0 1 1.492-4.45zm1 1V5h1.475a1.475 1.475 0 1 0 0-2.95zm-2.475 6.9H7V6H5.525a1.475 1.475 0 0 0-.006 2.95zM4.05 11.425c0-.813.657-1.472 1.47-1.475H7v1.475a1.475 1.475 0 0 1-2.95 0M8 7.472a1.475 1.475 0 1 1 0 .006z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};