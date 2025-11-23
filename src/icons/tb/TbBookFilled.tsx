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

export const TbBookFilled = (props: IconProps) => {
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
        <Path d="M12.088 4.82a10 10 0 0 1 9.412.314 1 1 0 0 1 .493.748L22 6v13a1 1 0 0 1-1.5.866 8 8 0 0 0-8 0 1 1 0 0 1-1 0 8 8 0 0 0-7.733-.148l-.327.18-.103.044-.049.016-.11.026-.061.01L3 20h-.042l-.11-.012-.077-.014-.108-.032-.126-.056-.095-.056-.089-.067-.06-.056-.073-.082-.064-.089-.022-.036-.032-.06-.044-.103-.016-.049-.026-.11-.01-.061-.004-.049L2 19V6a1 1 0 0 1 .5-.866 10 10 0 0 1 9.412-.314l.088.044z" />
      </G>
    </Svg>
  );
};