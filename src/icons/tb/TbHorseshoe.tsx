

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHorseshoe = (props: IconProps) => {

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
          <Path  d="M19 17c.5 -1.242 2 -2 2 -5s-1 -9 -9 -9s-9 6 -9 9s1.495 3.749 2 5l-2 1l2 3l2.406 -1.147c1.25 -.714 1.778 -2.08 1.203 -3.363c-1.078 -2.407 -1.609 -8.49 3.391 -8.49s4.469 6.083 3.39 8.49c-.574 1.284 -.045 2.649 1.204 3.363l2.406 1.147l2 -3l-2 -1z" />
        </G>
      </Svg>
    );
  }

