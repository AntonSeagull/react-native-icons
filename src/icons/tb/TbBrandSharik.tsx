

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandSharik = (props: IconProps) => {

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
          <Path  d="M4.281 16.606a8.968 8.968 0 0 1 1.363 -10.977a9.033 9.033 0 0 1 11.011 -1.346c-1.584 4.692 -2.415 6.96 -4.655 8.717c-1.584 1.242 -3.836 2.24 -7.719 3.606zm16.335 -7.306c2.113 7.59 -4.892 13.361 -11.302 11.264c1.931 -3.1 3.235 -4.606 4.686 -6.065c1.705 -1.715 3.591 -3.23 6.616 -5.199z" />
        </G>
      </Svg>
    );
  }

