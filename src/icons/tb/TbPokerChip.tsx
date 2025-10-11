

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPokerChip = (props: IconProps) => {

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
          <Path  d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <Path  d="M12 3v4" />
          <Path  d="M12 17v4" />
          <Path  d="M3 12h4" />
          <Path  d="M17 12h4" />
          <Path  d="M18.364 5.636l-2.828 2.828" />
          <Path  d="M8.464 15.536l-2.828 2.828" />
          <Path  d="M5.636 5.636l2.828 2.828" />
          <Path  d="M15.536 15.536l2.828 2.828" />
        </G>
      </Svg>
    );
  }

