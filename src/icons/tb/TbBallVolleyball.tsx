

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBallVolleyball = (props: IconProps) => {

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
          <Path  d="M12 12a8 8 0 0 0 8 4" />
          <Path  d="M7.5 13.5a12 12 0 0 0 8.5 6.5" />
          <Path  d="M12 12a8 8 0 0 0 -7.464 4.928" />
          <Path  d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" />
          <Path  d="M12 12a8 8 0 0 0 -.536 -8.928" />
          <Path  d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" />
        </G>
      </Svg>
    );
  }

