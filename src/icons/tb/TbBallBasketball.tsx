

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBallBasketball = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path  d="M5.65 5.65l12.7 12.7" />
          <Path  d="M5.65 18.35l12.7 -12.7" />
          <Path  d="M12 3a9 9 0 0 0 9 9" />
          <Path  d="M3 12a9 9 0 0 1 9 9" />
        </G>
      </Svg>
    );
  }

