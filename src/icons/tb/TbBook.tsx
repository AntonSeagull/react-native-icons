

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBook = (props: IconProps) => {

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
          <Path  d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <Path  d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <Path  d="M3 6l0 13" />
          <Path  d="M12 6l0 13" />
          <Path  d="M21 6l0 13" />
        </G>
      </Svg>
    );
  }

