

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDiaper = (props: IconProps) => {

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
          <Path  d="M3 8.323c0 -.579 0 -.868 .044 -1.11a2.7 2.7 0 0 1 2.17 -2.169c.239 -.044 .529 -.044 1.109 -.044h11.353c.579 0 .868 0 1.11 .044a2.7 2.7 0 0 1 2.169 2.17c.044 .24 .044 .53 .044 1.11v2.676a9 9 0 0 1 -18 0z" />
          <Path  d="M17 9h4" />
          <Path  d="M3 9h4" />
          <Path  d="M14.25 19.7v-1.4a6.3 6.3 0 0 1 6.3 -6.3" />
          <Path  d="M9.75 19.7v-1.4a6.3 6.3 0 0 0 -6.3 -6.3" />
        </G>
      </Svg>
    );
  }

