

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFileTypeHtml = (props: IconProps) => {

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
          <Path  d="M14 3v4a1 1 0 0 0 1 1h4" />
          <Path  d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
          <Path  d="M2 21v-6" />
          <Path  d="M5 15v6" />
          <Path  d="M2 18h3" />
          <Path  d="M20 15v6h2" />
          <Path  d="M13 21v-6l2 3l2 -3v6" />
          <Path  d="M7.5 15h3" />
          <Path  d="M9 15v6" />
        </G>
      </Svg>
    );
  }

