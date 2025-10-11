

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBinaryTree = (props: IconProps) => {

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
          <Path  d="M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path  d="M5.058 18.306l2.88 -4.606" />
          <Path  d="M10.061 10.303l2.877 -4.604" />
          <Path  d="M10.065 13.705l2.876 4.6" />
          <Path  d="M15.063 5.7l2.881 4.61" />
        </G>
      </Svg>
    );
  }

