

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBallBaseball = (props: IconProps) => {

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
          <Path  d="M5.636 18.364a9 9 0 1 0 12.728 -12.728a9 9 0 0 0 -12.728 12.728z" />
          <Path  d="M12.495 3.02a9 9 0 0 1 -9.475 9.475" />
          <Path  d="M20.98 11.505a9 9 0 0 0 -9.475 9.475" />
          <Path  d="M9 9l2 2" />
          <Path  d="M13 13l2 2" />
          <Path  d="M11 7l2 1" />
          <Path  d="M7 11l1 2" />
          <Path  d="M16 11l1 2" />
          <Path  d="M11 16l2 1" />
        </G>
      </Svg>
    );
  }

