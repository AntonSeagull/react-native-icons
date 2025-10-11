

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRotaryLastLeft = (props: IconProps) => {

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
          <Path  d="M15 15a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" />
          <Path  d="M15 15v6" />
          <Path  d="M12.5 9.5l-6.5 -6.5" />
          <Path  d="M11 3h-5v5" />
        </G>
      </Svg>
    );
  }

