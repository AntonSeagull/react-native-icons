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

export const GiEmptyChessboard = (props: IconProps) => {
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
        <Path d="M21 21v58.75h58.75V21zm58.75 58.75v58.75h58.75V79.75zm58.75 0h58.75V21H138.5zm58.75 0v58.75H256V79.75zm58.75 0h58.75V21H256zm58.75 0v58.75h58.75V79.75zm58.75 0h58.75V21H373.5zm58.75 0v58.75H491V79.75zm0 58.75H373.5v58.75h58.75zm0 58.75V256H491v-58.75zm0 58.75H373.5v58.75h58.75zm0 58.75v58.75H491v-58.75zm0 58.75H373.5v58.75h58.75zm0 58.75V491H491v-58.75zm-58.75 0h-58.75V491h58.75zm-58.75 0V373.5H256v58.75zm-58.75 0h-58.75V491H256zm-58.75 0V373.5H138.5v58.75zm-58.75 0H79.75V491h58.75zm-58.75 0V373.5H21v58.75zm0-58.75h58.75v-58.75H79.75zm0-58.75V256H21v58.75zm0-58.75h58.75v-58.75H79.75zm0-58.75V138.5H21v58.75zm58.75 0h58.75V138.5H138.5zm58.75 0V256H256v-58.75zm58.75 0h58.75V138.5H256zm58.75 0V256h58.75v-58.75zm0 58.75H256v58.75h58.75zm0 58.75v58.75h58.75v-58.75zm-58.75 0h-58.75v58.75H256zm-58.75 0V256H138.5v58.75z" />
      </G>
    </Svg>
  );
};