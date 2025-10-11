

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbComponentsOff = (props: IconProps) => {

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
          <Path  d="M3 12l3 3l3 -3l-3 -3z" />
          <Path  d="M18.5 14.5l2.5 -2.5l-3 -3l-2.5 2.5" />
          <Path  d="M12.499 8.501l2.501 -2.501l-3 -3l-2.5 2.5" />
          <Path  d="M9 18l3 3l3 -3l-3 -3z" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

