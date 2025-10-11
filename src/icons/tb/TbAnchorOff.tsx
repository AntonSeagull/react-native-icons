

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAnchorOff = (props: IconProps) => {

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
          <Path  d="M12 12v9" />
          <Path  d="M4 13a8 8 0 0 0 14.138 5.13m1.44 -2.56a7.99 7.99 0 0 0 .422 -2.57" />
          <Path  d="M21 13h-2" />
          <Path  d="M5 13h-2" />
          <Path  d="M12.866 8.873a3 3 0 1 0 -3.737 -3.747" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

