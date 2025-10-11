

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBlade = (props: IconProps) => {

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
          <Path  d="M17.707 3.707l2.586 2.586a1 1 0 0 1 0 1.414l-.586 .586a1 1 0 0 0 0 1.414l.586 .586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1 -1.414 0l-.586 -.586a1 1 0 0 0 -1.414 0l-.586 .586a1 1 0 0 1 -1.414 0l-2.586 -2.586a1 1 0 0 1 0 -1.414l.586 -.586a1 1 0 0 0 0 -1.414l-.586 -.586a1 1 0 0 1 0 -1.414l8.586 -8.586a1 1 0 0 1 1.414 0l.586 .586a1 1 0 0 0 1.414 0l.586 -.586a1 1 0 0 1 1.414 0z" />
          <Path  d="M8 16l3.2 -3.2" />
          <Path  d="M12.8 11.2l3.2 -3.2" />
          <Path  d="M14 8l2 2" />
          <Path  d="M8 14l2 2" />
          <Path  d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </G>
      </Svg>
    );
  }

