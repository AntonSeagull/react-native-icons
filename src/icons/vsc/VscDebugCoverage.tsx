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

export const VscDebugCoverage = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M5 2.41 5.78 2l9 6v.83L9 12.683v-1.2l4.6-3.063L6 3.35V7H5z" clipRule="evenodd" />
        <Path fillRule="evenodd" d="M6.13 12.124q-.273.27-.42.6-.145.328-.145.715v.862a.69.69 0 0 1-.205.495.7.7 0 0 1-.496.204h-.865a.7.7 0 0 1-.497-.204.7.7 0 0 1-.205-.495v-.862q0-.387-.147-.716a1.9 1.9 0 0 0-.418-.6 2.5 2.5 0 0 1-.542-.773 2.26 2.26 0 0 1-.19-.927A2.4 2.4 0 0 1 2.332 9.2a2.4 2.4 0 0 1 .87-.87A2.5 2.5 0 0 1 4.432 8a2.4 2.4 0 0 1 1.225.33 2.41 2.41 0 0 1 1.205 2.093q0 .498-.19.927a2.5 2.5 0 0 1-.542.774m-1.103.991H3.835v1.186q0 .064.049.114.048.049.115.048h.865a.16.16 0 0 0 .114-.048.15.15 0 0 0 .049-.114z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};