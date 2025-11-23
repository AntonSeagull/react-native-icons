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

export const GiStoneThrone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M255.563 21.125 162.5 53.188v216.75h17.563v35.093H333V269.94h17.564l-.002-216.594-95-32.22zm-143.22 9.156v239.657h31.47V30.28zm256.907 0v239.657h31.47V30.28zM203.687 59.157l30.938 33.875 22.188-33.28 22.218 33.28 28.595-31.53-11.688 63.656h-80zM77.844 288.626v34.28h83.53v-34.28zm273.844 0v34.28h83.53v-34.28zm-171.625 35.093v17.874h-17.408v15.22l187.75-.002v-15.218H333V323.72H180.062zM95.25 341.593v150.47l48.72-.002V341.595H95.25zm273.844 0v150.47l48.72-.002-.002-150.468zM162.656 375.5v97.156h187.75V375.5z" />
      </G>
    </Svg>
  );
};