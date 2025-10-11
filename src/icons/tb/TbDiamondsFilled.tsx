

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDiamondsFilled = (props: IconProps) => {

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
          <Path  d="M12 2.005c-.777 0 -1.508 .367 -1.971 .99l-5.362 6.895c-.89 1.136 -.89 3.083 0 4.227l5.375 6.911a2.457 2.457 0 0 0 3.93 -.017l5.361 -6.894c.89 -1.136 .89 -3.083 0 -4.227l-5.375 -6.911a2.446 2.446 0 0 0 -1.958 -.974z" />
        </G>
      </Svg>
    );
  }

