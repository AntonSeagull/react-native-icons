

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWhirl = (props: IconProps) => {

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
          <Path  d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M12 21c-3.314 0 -6 -2.462 -6 -5.5s2.686 -5.5 6 -5.5" />
          <Path  d="M21 12c0 3.314 -2.462 6 -5.5 6s-5.5 -2.686 -5.5 -6" />
          <Path  d="M12 14c3.314 0 6 -2.462 6 -5.5s-2.686 -5.5 -6 -5.5" />
          <Path  d="M14 12c0 -3.314 -2.462 -6 -5.5 -6s-5.5 2.686 -5.5 6" />
        </G>
      </Svg>
    );
  }

