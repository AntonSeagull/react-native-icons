

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBinaryTree2 = (props: IconProps) => {

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
          <Path  d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M12 8v8" />
          <Path  d="M6.316 12.496l4.368 -4.992" />
          <Path  d="M17.684 12.496l-4.366 -4.99" />
        </G>
      </Svg>
    );
  }

