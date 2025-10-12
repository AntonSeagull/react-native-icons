

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiKeyboardBoxFill = (props: IconProps) => {

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
          <Path  d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 7V9H7V7H5ZM5 11V13H7V11H5ZM5 15V17H19V15H5ZM9 11V13H11V11H9ZM9 7V9H11V7H9ZM13 7V9H15V7H13ZM17 7V9H19V7H17ZM13 11V13H15V11H13ZM17 11V13H19V11H17Z" />
        </G>
      </Svg>
    );
  }

